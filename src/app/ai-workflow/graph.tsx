"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type GraphNode = {
  id: string;
  label: string;
  group: string;
  x: number;
  y: number;
  size: string;
  description: string;
};

type Props = {
  nodes: GraphNode[];
  satellites: { x: number; y: number; tone: string }[];
  edges: string[][];
  coreId: string;
};

// Simulation runs in an abstract 100x100 space, then maps to the viewBox.
const WORLD = 100;
const REPULSION = 130;
const SPRING = 0.012;
const SPRING_LENGTH = 26;
const CORE_SPRING = 0.008;
const CENTER_PULL = 0.0016;
const DAMPING = 0.86;
const MIN_ZOOM = 0.55;
const MAX_ZOOM = 3.2;

// The homepage palette: grey everywhere, amber only on the agent nodes.
const AMBER = "rgb(251,191,36)";
const EDGE = "rgba(209,213,219,0.10)";
const EDGE_LIT = "rgba(209,213,219,0.32)";
const SPOKE = "rgba(209,213,219,0.14)";
const SPOKE_LIT = "rgba(251,191,36,0.45)";

function nodeRadius(size: string) {
  if (size === "lg") return 7.4;
  if (size === "md") return 6.2;
  return 4.8;
}

function isAgent(group: string) {
  return group === "agent";
}

function nodeFill(group: string) {
  return isAgent(group) ? "rgba(251,191,36,0.10)" : "rgba(209,213,219,0.04)";
}

function nodeStroke(group: string) {
  return isAgent(group) ? "rgba(251,191,36,0.45)" : "rgba(209,213,219,0.18)";
}

function nodeText(group: string) {
  return isAgent(group) ? AMBER : "#d1d5db";
}

function satelliteFill(tone: string) {
  if (tone === "white") return "rgba(209,213,219,0.28)";
  return "rgba(209,213,219,0.12)";
}

type Body = { x: number; y: number; vx: number; vy: number };

export default function WorkflowGraph({ nodes, satellites, edges, coreId }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const bodies = useRef<Map<string, Body>>(
    new Map(nodes.map((n) => [n.id, { x: n.x, y: n.y, vx: 0, vy: 0 }]))
  );
  const frame = useRef(0);
  const running = useRef(false);
  const startLoop = useRef<() => void>(() => {});
  const dragging = useRef<string | null>(null);
  const panning = useRef<{ clientX: number; clientY: number } | null>(null);
  // Live pointers, so a second finger can turn a drag into a pinch.
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinch = useRef<{ distance: number; zoom: number } | null>(null);

  // The loop mutates refs; each frame publishes an immutable snapshot to render.
  const view = useRef({ x: 0, y: 0, zoom: 1 });
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  // touch-action is ignored on SVG children, so a node drag has to suspend
  // pan-y on the <svg> itself or the browser steals the gesture for scrolling.
  const [grabbing, setGrabbing] = useState(false);

  const [frozen, setFrozen] = useState<{
    positions: Record<string, { x: number; y: number }>;
    view: { x: number; y: number; zoom: number };
  }>(() => ({
    positions: Object.fromEntries(nodes.map((n) => [n.id, { x: n.x, y: n.y }])),
    view: { x: 0, y: 0, zoom: 1 },
  }));

  const publish = useCallback(() => {
    const positions: Record<string, { x: number; y: number }> = {};
    for (const [id, body] of bodies.current) {
      positions[id] = { x: body.x, y: body.y };
    }
    setFrozen({ positions, view: { ...view.current } });
  }, []);

  const edgeSet = useMemo(() => {
    const map = new Map<string, Set<string>>();
    const link = (a: string, b: string) => {
      if (!map.has(a)) map.set(a, new Set());
      map.get(a)!.add(b);
    };
    for (const [from, to] of edges) {
      link(from, to);
      link(to, from);
    }
    for (const node of nodes) {
      if (node.id === coreId) continue;
      link(coreId, node.id);
      link(node.id, coreId);
    }
    return map;
  }, [edges, nodes, coreId]);

  const isNeighbor = useCallback(
    (id: string) => {
      if (!hovered) return false;
      return hovered === id || edgeSet.get(hovered)?.has(id) === true;
    },
    [hovered, edgeSet]
  );

  // Convert a pointer event into simulation coordinates. Under "meet" the
  // viewBox is letterboxed: one scale for both axes, centered in the box.
  const toWorld = useCallback((event: { clientX: number; clientY: number }) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const { x, y, zoom } = view.current;
    const span = WORLD / zoom;
    const scale = Math.min(rect.width, rect.height) / span;
    const padX = (rect.width - span * scale) / 2;
    const padY = (rect.height - span * scale) / 2;
    return {
      x: x + (event.clientX - rect.left - padX) / scale,
      y: y + (event.clientY - rect.top - padY) / scale,
    };
  }, []);

  // Scale around a screen point, keeping whatever sits under it pinned: zoom
  // first, then shift by however far that point drifted.
  const zoomAt = useCallback(
    (next: number, clientX: number, clientY: number) => {
      const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
      if (clamped === view.current.zoom) return;
      const before = toWorld({ clientX, clientY });
      view.current.zoom = clamped;
      const after = toWorld({ clientX, clientY });
      view.current.x += before.x - after.x;
      view.current.y += before.y - after.y;
      publish();
    },
    [toWorld, publish]
  );

  // React attaches wheel and touchstart passively, where preventDefault() is a
  // no-op, so the page scrolls alongside the gesture. Bind both non-passively.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      zoomAt(
        view.current.zoom * Math.exp(-event.deltaY * 0.0016),
        event.clientX,
        event.clientY
      );
    };

    // touch-action is declared on SVG children but never honored — Chrome's
    // hit test needs a layout box, which <g> has none of. So a node drag and
    // a pinch have to cancel the scroll here, before the browser commits to
    // one. touchstart is the last moment preventDefault() can still do that.
    const onTouchStart = (event: TouchEvent) => {
      const onNode = (event.target as Element | null)?.closest("[data-node]");
      if (onNode || event.touches.length > 1) event.preventDefault();
    };

    svg.addEventListener("wheel", onWheel, { passive: false });
    svg.addEventListener("touchstart", onTouchStart, { passive: false });
    return () => {
      svg.removeEventListener("wheel", onWheel);
      svg.removeEventListener("touchstart", onTouchStart);
    };
  }, [zoomAt]);

  useEffect(() => {
    const step = () => {
      const list = nodes.map((node) => ({
        node,
        body: bodies.current.get(node.id)!,
      }));

      let energy = 0;

      for (const { node, body } of list) {
        if (dragging.current === node.id) continue;

        let fx = 0;
        let fy = 0;

        // Every pair pushes apart, so labels never pile up.
        for (const other of list) {
          if (other.node.id === node.id) continue;
          const dx = body.x - other.body.x;
          const dy = body.y - other.body.y;
          const distance = Math.hypot(dx, dy) || 0.01;
          const force = REPULSION / (distance * distance);
          fx += (dx / distance) * force;
          fy += (dy / distance) * force;
        }

        // Edges act as springs at rest length.
        for (const otherId of edgeSet.get(node.id) ?? []) {
          const other = bodies.current.get(otherId);
          if (!other) continue;
          const dx = other.x - body.x;
          const dy = other.y - body.y;
          const distance = Math.hypot(dx, dy) || 0.01;
          const stiffness = otherId === coreId || node.id === coreId ? CORE_SPRING : SPRING;
          const force = (distance - SPRING_LENGTH) * stiffness;
          fx += (dx / distance) * force;
          fy += (dy / distance) * force;
        }

        // A weak pull inward keeps the cloud from drifting off-canvas.
        fx += (WORLD / 2 - body.x) * CENTER_PULL;
        fy += (WORLD / 2 - body.y) * CENTER_PULL;

        body.vx = (body.vx + fx) * DAMPING;
        body.vy = (body.vy + fy) * DAMPING;
        body.x += body.vx;
        body.y += body.vy;
        energy += body.vx * body.vx + body.vy * body.vy;
      }

      publish();

      // Idle once the layout settles; a drag or pan restarts the loop.
      const settled = energy < 1e-5 && !dragging.current;
      if (settled) {
        running.current = false;
        return;
      }
      frame.current = requestAnimationFrame(step);
    };

    const start = () => {
      if (running.current) return;
      running.current = true;
      frame.current = requestAnimationFrame(step);
    };

    startLoop.current = start;
    start();
    return () => {
      running.current = false;
      cancelAnimationFrame(frame.current);
    };
  }, [nodes, edgeSet, coreId, publish]);

  const spread = () => {
    const [a, b] = [...pointers.current.values()];
    return {
      distance: Math.hypot(a.x - b.x, a.y - b.y) || 0.01,
      midX: (a.x + b.x) / 2,
      midY: (a.y + b.y) / 2,
    };
  };

  const onPointerDown = useCallback((event: React.PointerEvent<SVGSVGElement>) => {
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    event.currentTarget.setPointerCapture?.(event.pointerId);

    if (pointers.current.size === 2) {
      // A second finger promotes whatever was happening into a pinch.
      dragging.current = null;
      panning.current = null;
      pinch.current = { distance: spread().distance, zoom: view.current.zoom };
      setGrabbing(true);
      return;
    }

    // One finger on empty canvas belongs to the page, so it can scroll past.
    // A mouse has no such conflict and pans as before.
    if (event.pointerType !== "touch") {
      panning.current = { clientX: event.clientX, clientY: event.clientY };
      setGrabbing(true);
    }
  }, []);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<SVGSVGElement>) => {
      if (pointers.current.has(event.pointerId)) {
        pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
      }

      if (pinch.current && pointers.current.size === 2) {
        const { distance, midX, midY } = spread();
        zoomAt(pinch.current.zoom * (distance / pinch.current.distance), midX, midY);
        return;
      }

      if (dragging.current) {
        const point = toWorld(event);
        const body = bodies.current.get(dragging.current);
        if (body) {
          body.x = point.x;
          body.y = point.y;
          body.vx = 0;
          body.vy = 0;
        }
        return;
      }

      if (panning.current) {
        const from = toWorld(panning.current);
        const to = toWorld(event);
        view.current.x += from.x - to.x;
        view.current.y += from.y - to.y;
        panning.current = { clientX: event.clientX, clientY: event.clientY };
        publish();
      }
    },
    [toWorld, publish, zoomAt]
  );

  const endPointer = useCallback((event: React.PointerEvent<SVGSVGElement>) => {
    pointers.current.delete(event.pointerId);
    const wasDragging = dragging.current !== null;

    if (pointers.current.size < 2) pinch.current = null;
    // Lifting one of two fingers must not hand the graph a stale pan origin.
    if (pointers.current.size === 0) {
      dragging.current = null;
      panning.current = null;
      setGrabbing(false);
    }

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    // Releasing a node lets the springs pull the layout back into balance.
    if (wasDragging) startLoop.current();
  }, []);

  const reset = useCallback(() => {
    view.current = { x: 0, y: 0, zoom: 1 };
    for (const node of nodes) {
      bodies.current.set(node.id, { x: node.x, y: node.y, vx: 0, vy: 0 });
    }
    startLoop.current();
    publish();
  }, [nodes, publish]);

  const { positions, view: painted } = frozen;
  const span = WORLD / painted.zoom;
  const detail = nodes.find((node) => node.id === (active ?? hovered));
  const at = (id: string) => positions[id];

  return (
    <div className="relative h-[340px] w-full overflow-hidden sm:h-[420px]">
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full select-none"
        viewBox={`${painted.x} ${painted.y} ${span} ${span}`}
        // "slice" cropped the square world to cover the box, cutting off the
        // outer nodes once the simulation spread them. "meet" fits them all.
        preserveAspectRatio="xMidYMid meet"
        role="group"
        aria-label={`Interactive graph of the AI workflow, centered on ${
          nodes.find((node) => node.id === coreId)?.label ?? coreId
        }: ${nodes.map((node) => node.label).join(", ")}.`}
        // pan-y hands vertical swipes to the page, so the graph is never a
        // scroll trap. Node drags and pinches opt out in the touchstart above.
        style={{ cursor: grabbing ? "grabbing" : "grab", touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerLeave={(event) => {
          endPointer(event);
          setHovered(null);
        }}
        onPointerCancel={endPointer}
      >
        {satellites.map((satellite, index) => (
          <circle
            key={`sat-${index}`}
            cx={satellite.x}
            cy={satellite.y}
            r={1.1}
            fill={satelliteFill(satellite.tone)}
          />
        ))}

        {edges.map(([from, to]) => {
          const start = at(from);
          const end = at(to);
          if (!start || !end) return null;
          const lit = hovered ? isNeighbor(from) && isNeighbor(to) : false;
          return (
            <line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={lit ? EDGE_LIT : EDGE}
              strokeWidth={lit ? 0.3 : 0.16}
            />
          );
        })}

        {nodes
          .filter((node) => node.id !== coreId)
          .map((node) => {
            const core = at(coreId);
            const body = at(node.id);
            if (!core || !body) return null;
            const lit = hovered ? isNeighbor(node.id) : false;
            return (
              <line
                key={`core-${node.id}`}
                x1={core.x}
                y1={core.y}
                x2={body.x}
                y2={body.y}
                stroke={lit ? SPOKE_LIT : SPOKE}
                strokeWidth={lit ? 0.34 : 0.18}
              />
            );
          })}

        {nodes.map((node) => {
          const body = at(node.id);
          if (!body) return null;
          const radius = nodeRadius(node.size);
          const dim = hovered !== null && !isNeighbor(node.id);
          const focused = hovered === node.id || active === node.id;
          return (
            <g
              key={node.id}
              data-node=""
              role="button"
              tabIndex={0}
              aria-label={`${node.label}. ${node.description}`}
              transform={`translate(${body.x} ${body.y})`}
              opacity={dim ? 0.32 : 1}
              style={{ cursor: "grab" }}
              onPointerDown={(event) => {
                event.stopPropagation();
                pointers.current.set(event.pointerId, {
                  x: event.clientX,
                  y: event.clientY,
                });
                if (pointers.current.size === 2) {
                  dragging.current = null;
                  pinch.current = { distance: spread().distance, zoom: view.current.zoom };
                } else {
                  dragging.current = node.id;
                  setActive(node.id);
                }
                setGrabbing(true);
                svgRef.current?.setPointerCapture?.(event.pointerId);
                startLoop.current();
              }}
              onPointerEnter={() => setHovered(node.id)}
              onPointerLeave={() => setHovered(null)}
              onFocus={() => setActive(node.id)}
              onBlur={() => setActive(null)}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                setActive(node.id);
              }}
            >
              <circle
                r={focused ? radius * 1.08 : radius}
                fill={nodeFill(node.group)}
                stroke={focused ? "rgba(209,213,219,0.45)" : nodeStroke(node.group)}
                strokeWidth={0.3}
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fill={nodeText(node.group)}
                fontSize={node.size === "sm" ? 2.2 : 2.6}
                fontWeight={400}
                pointerEvents="none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {detail && (
        <div className="pointer-events-none absolute left-0 top-0 w-48 rounded-sm border border-gray-300/10 bg-[#060606]/90 px-3 py-2.5">
          <div className="text-[10px] uppercase tracking-widest text-gray-300/40">
            {detail.label}
          </div>
          <p className="mt-1 text-[12px] leading-relaxed text-gray-400">
            {detail.description}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={reset}
        className="absolute right-0 top-0 text-[11px] text-gray-300/40 transition-colors hover:text-gray-300"
      >
        reset view
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-baseline justify-between gap-4 text-[11px] text-gray-300/40">
        <span className="sm:hidden">drag or tap a node · pinch to zoom</span>
        <span className="hidden sm:inline">drag or tab through nodes · scroll to zoom</span>
        <span className="hidden sm:inline">not a chat box</span>
      </div>
    </div>
  );
}
