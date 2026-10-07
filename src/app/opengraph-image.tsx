import { ImageResponse } from "next/og";

export const alt = "Furkan Titiz — AI engineering, web products, and iOS apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#ffffff", color: "#262626", display: "flex", flexDirection: "column", height: "100%", width: "100%", padding: "80px 100px" }}>
      <div style={{ display: "flex", fontSize: 26 }}>Furkan Titiz</div>
      <div style={{ display: "flex", fontSize: 56, letterSpacing: "-0.03em", marginTop: 72 }}>AI Engineer building</div>
      <div style={{ display: "flex", fontSize: 56, letterSpacing: "-0.03em", color: "#626262", marginTop: 4 }}>products &amp; agentic systems.</div>
      <div style={{ display: "flex", fontSize: 22, color: "#626262", borderTop: "1px solid #ededed", paddingTop: 26, marginTop: "auto" }}>Stylefinden · WakeSay · Visual Plate · Museum of My Mind</div>
      <div style={{ display: "flex", fontSize: 18, color: "#737373", marginTop: 20 }}>furkantitiz.dev</div>
    </div>,
    size,
  );
}
