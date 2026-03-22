import { Bookmark, Compass, Home, User } from "lucide-react";

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "discover", label: "Explore", Icon: Compass },
  { id: "bookmarks", label: "Saved", Icon: Bookmark },
  { id: "profile", label: "Profile", Icon: User },
];

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(26,28,32,0.98)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid var(--border-subtle)",
        height: 64,
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {navItems.map(({ id, label, Icon }) => {
          const isActive = currentPage === id || currentPage.startsWith(id);
          return (
            <button
              type="button"
              key={id}
              onClick={() => onNavigate(id)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "all 0.15s ease",
                position: "relative",
                color: isActive ? "var(--brand)" : "var(--text-secondary)",
              }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {label}
              </span>
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: 24,
                    height: 2,
                    background: "var(--brand)",
                    borderRadius: "2px 2px 0 0",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
