import type { Article } from "../data/articles";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  onNavigate?: (slug: string) => void;
}

export default function ArticleCard({
  article,
  variant = "default",
  onNavigate,
}: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <button
        type="button"
        style={{
          display: "flex",
          gap: 12,
          cursor: "pointer",
          padding: "12px 0",
          borderBottom: "1px solid var(--border-subtle)",
          background: "none",
          border: "none",
          borderBottomColor: "var(--border-subtle)",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          width: "100%",
          textAlign: "left",
        }}
        onClick={() => onNavigate?.(article.slug)}
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            width: 72,
            height: 56,
            borderRadius: 8,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--brand)",
              fontFamily: "Inter, sans-serif",
              display: "block",
            }}
          >
            {article.category}
          </span>
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.3,
              marginTop: 2,
              fontFamily: "Playfair Display, serif",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.title}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              fontFamily: "Inter, sans-serif",
              display: "block",
              marginTop: 2,
            }}
          >
            {article.readTime} min
          </span>
        </div>
      </button>
    );
  }

  if (variant === "featured") {
    return (
      <button
        type="button"
        className="article-card"
        onClick={() => onNavigate?.(article.slug)}
        style={{
          position: "relative",
          minHeight: 420,
          overflow: "hidden",
          width: "100%",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          display: "block",
          textAlign: "left",
        }}
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,17,20,0.95) 0%, rgba(15,17,20,0.7) 55%, rgba(15,17,20,0.1) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "40px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            minHeight: 420,
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--brand)",
              fontFamily: "Inter, sans-serif",
              marginBottom: 12,
              display: "block",
            }}
          >
            {article.category}
          </span>
          <span
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              fontFamily: "Playfair Display, serif",
              maxWidth: 520,
              marginBottom: 14,
              display: "block",
            }}
          >
            {article.title}
          </span>
          <span
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: 460,
              marginBottom: 20,
              fontFamily: "Inter, sans-serif",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.summary}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              Read Story
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {article.readTime} min read &middot; {article.author}
            </span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      className="article-card"
      onClick={() => onNavigate?.(article.slug)}
      style={{
        width: "100%",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "block",
        textAlign: "left",
      }}
    >
      <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0" }}>
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div style={{ padding: "20px 20px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--brand)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {article.category}
          </span>
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "var(--text-muted)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {article.readTime} min
          </span>
        </div>
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.3,
            fontFamily: "Playfair Display, serif",
            marginBottom: 10,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {article.title}
        </span>
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            fontFamily: "Inter, sans-serif",
            marginBottom: 16,
            marginTop: 8,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {article.summary}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {article.author} &middot; {article.publishedAt}
          </span>
          <span
            className="btn-primary"
            style={{
              fontSize: "0.7rem",
              padding: "5px 14px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Read More
          </span>
        </div>
      </div>
    </button>
  );
}
