interface AdSlotProps {
  size: "leaderboard" | "rectangle" | "halfpage" | "banner";
  label?: string;
}

const sizeMap = {
  leaderboard: {
    width: "100%",
    height: "90px",
    text: "728 × 90 — Leaderboard",
  },
  rectangle: {
    width: "100%",
    height: "250px",
    text: "300 × 250 — Medium Rectangle",
  },
  halfpage: { width: "100%", height: "600px", text: "300 × 600 — Half Page" },
  banner: { width: "100%", height: "60px", text: "320 × 50 — Mobile Banner" },
};

export default function AdSlot({ size, label = "Advertisement" }: AdSlotProps) {
  const { height, text } = sizeMap[size];
  return (
    <div
      className="ad-slot"
      style={{ height, position: "relative", padding: "40px 16px 16px" }}
      aria-label={label}
    >
      <span className="ad-label">{label}</span>
      <span
        style={{
          color: "var(--text-muted)",
          fontSize: "0.7rem",
          marginTop: "8px",
        }}
      >
        {text}
      </span>
      <span
        style={{ color: "var(--brand)", fontSize: "0.65rem", opacity: 0.5 }}
      >
        Google AdSense
      </span>
    </div>
  );
}
