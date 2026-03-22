import { Search } from "lucide-react";
import { useState } from "react";
import AdSlot from "../components/AdSlot";
import ArticleCard from "../components/ArticleCard";
import { CATEGORIES, articles } from "../data/articles";

interface DiscoverPageProps {
  onNavigate: (page: string) => void;
}

export default function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "all" || a.category === activeCategory;
    const matchQuery =
      !query ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.summary.toLowerCase().includes(query.toLowerCase()) ||
      a.tags.some((t) => t.includes(query.toLowerCase()));
    return matchCat && matchQuery;
  });

  return (
    <div
      style={{
        paddingTop: 72,
        maxWidth: 1140,
        margin: "0 auto",
        padding: "72px 16px 0",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto 32px" }}>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          Explore Stories
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "var(--text-secondary)",
            fontSize: "1rem",
            marginBottom: 24,
          }}
        >
          Discover founder stories, products, and market insights from around
          the world.
        </p>

        <div style={{ position: "relative", marginBottom: 24 }}>
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
            }}
          />
          <input
            id="discover-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, founders..."
            aria-label="Search articles"
            style={{
              width: "100%",
              background: "var(--bg-panel)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: "12px 16px 12px 44px",
              color: "var(--text-primary)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.15s ease",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.id}
              className={`category-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <AdSlot size="leaderboard" />
      </div>

      <div style={{ marginBottom: 20 }}>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 32,
        }}
      >
        {filtered.slice(0, 6).map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onNavigate={(slug) => onNavigate(`article/${slug}`)}
          />
        ))}
      </div>

      {filtered.length > 6 && (
        <>
          <div style={{ margin: "16px 0 24px" }}>
            <AdSlot size="leaderboard" label="Sponsored" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 32,
            }}
          >
            {filtered.slice(6).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onNavigate={(slug) => onNavigate(`article/${slug}`)}
              />
            ))}
          </div>
        </>
      )}

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "64px 0",
            color: "var(--text-secondary)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>
            No stories found.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
}
