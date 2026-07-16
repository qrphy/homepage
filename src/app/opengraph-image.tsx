import { ImageResponse } from "next/og";

export const alt = "Furkan Titiz — AI Engineer building agentic systems";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#060606",
          color: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(93, 139, 255, 0.18)",
            borderRadius: "999px",
            filter: "blur(10px)",
            height: "480px",
            position: "absolute",
            right: "-130px",
            top: "-170px",
            width: "480px",
          }}
        />
        <div
          style={{
            background: "rgba(179, 112, 255, 0.13)",
            borderRadius: "999px",
            bottom: "-250px",
            height: "500px",
            left: "390px",
            position: "absolute",
            width: "500px",
          }}
        />

        <div
          style={{
            color: "#dcecff",
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.18em",
            position: "relative",
          }}
        >
          FURKAN TITIZ / PORTFOLIO
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", fontSize: 66, fontWeight: 600, letterSpacing: "-0.04em" }}>
            AI Engineer
          </div>
          <div style={{ color: "#dcecff", display: "flex", fontSize: 48, letterSpacing: "-0.03em", marginTop: "8px" }}>
            building agentic systems
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(245, 245, 245, 0.22)",
              color: "#b7b7b7",
              display: "flex",
              fontSize: 22,
              marginTop: "38px",
              paddingTop: "24px",
            }}
          >
            Vault-backed memory · Specialist agents · Human-governed production workflows
          </div>
        </div>

        <div
          style={{
            color: "#fde68a",
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.1em",
            marginTop: "42px",
            position: "relative",
          }}
        >
          STYLEFINDEN — CO-FOUNDER &amp; LEAD DEVELOPER
        </div>
      </div>
    ),
    size,
  );
}
