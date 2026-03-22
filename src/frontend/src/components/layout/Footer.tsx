interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "48px 20px 32px",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div style={{ flex: "1 1 220px" }}>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              <span style={{ color: "var(--brand)" }}>LEXIE</span>
              <span style={{ color: "var(--text-primary)" }}> INNOVATE</span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontFamily: "Inter, sans-serif",
                maxWidth: 280,
              }}
            >
              Premium editorial coverage of the founders, products, and
              companies shaping global markets.
            </p>
          </div>
          <div style={{ flex: "1 1 140px" }}>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: 16,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Topics
            </h4>
            {[
              "Founders",
              "Products",
              "Services",
              "Global Markets",
              "Innovation",
              "Companies",
            ].map((t) => (
              <div key={t} style={{ marginBottom: 10 }}>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate(`category/${t.toLowerCase().replace(" ", "-")}`)
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontFamily: "Inter, sans-serif",
                    padding: 0,
                  }}
                >
                  {t}
                </button>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 140px" }}>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: 16,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Company
            </h4>
            {[
              { label: "About", page: "about" },
              { label: "Contact", page: "contact" },
              { label: "Submit a Story", page: "contact" },
            ].map(({ label, page }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <button
                  type="button"
                  onClick={() => onNavigate(page)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontFamily: "Inter, sans-serif",
                    padding: 0,
                  }}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 220px" }}>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: 16,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Newsletter
            </h4>
            <p
              style={{
                fontSize: "0.83rem",
                color: "var(--text-secondary)",
                marginBottom: 14,
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Weekly stories on innovation and global business.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                placeholder="Your email"
                type="email"
                aria-label="Newsletter email"
                style={{
                  flex: 1,
                  background: "var(--bg-panel)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 8,
                  padding: "9px 14px",
                  color: "var(--text-primary)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.83rem",
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <button
                type="button"
                className="btn-primary"
                style={{
                  fontSize: "0.72rem",
                  padding: "9px 14px",
                  flexShrink: 0,
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            &copy; 2026 Lexie Innovate. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Use", "Editorial Policy"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
