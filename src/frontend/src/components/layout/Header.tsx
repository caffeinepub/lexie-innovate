import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "category/founders", label: "Founders" },
  { id: "category/products", label: "Products" },
  { id: "category/global-markets", label: "Global" },
  { id: "category/innovation", label: "Innovation" },
  { id: "about", label: "About" },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(15,17,20,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
          height: 60,
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <button
            type="button"
            onClick={() => onNavigate("home")}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              background: "none",
              border: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              padding: 0,
            }}
          >
            <span style={{ color: "var(--brand)" }}>LEXIE</span>
            <span style={{ color: "var(--text-primary)", marginLeft: 4 }}>
              INNOVATE
            </span>
          </button>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flex: 1,
              overflow: "hidden",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                  letterSpacing: "0.02em",
                  padding: "6px 10px",
                  borderRadius: 6,
                  color: currentPage.startsWith(link.id)
                    ? "var(--brand)"
                    : "var(--text-secondary)",
                  transition: "color 0.15s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div style={{ flex: 1 }} className="show-mobile" />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-secondary)",
                padding: 6,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="btn-primary hidden-mobile"
              style={{ fontSize: "0.72rem", padding: "6px 16px" }}
              onClick={() => {}}
            >
              Login
            </button>
            <button
              type="button"
              className="show-mobile"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-secondary)",
                padding: 6,
              }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
              background: "var(--bg-card)",
              borderBottom: "1px solid var(--border-subtle)",
              padding: "12px 20px",
            }}
          >
            <div style={{ maxWidth: 1140, margin: "0 auto" }}>
              <input
                placeholder="Search articles, founders, topics..."
                aria-label="Search"
                style={{
                  width: "100%",
                  background: "var(--bg-panel)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 8,
                  padding: "10px 16px",
                  color: "var(--text-primary)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "rgba(15,17,20,0.98)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Playfair Display, serif",
                fontWeight: 600,
                fontSize: "1.4rem",
                color: "var(--text-primary)",
                textAlign: "left",
                padding: "12px 0",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: 24, alignSelf: "flex-start" }}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
