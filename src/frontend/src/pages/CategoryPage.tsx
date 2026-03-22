import AdSlot from "../components/AdSlot";
import ArticleCard from "../components/ArticleCard";
import { CATEGORIES, getArticlesByCategory } from "../data/articles";

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (page: string) => void;
}

export default function CategoryPage({
  categorySlug,
  onNavigate,
}: CategoryPageProps) {
  const articles = getArticlesByCategory(categorySlug);
  const category = CATEGORIES.find((c) => c.id === categorySlug);
  const categoryLabel = category?.label ?? categorySlug;

  return (
    <div
      style={{
        paddingTop: 72,
        maxWidth: 1140,
        margin: "0 auto",
        padding: "72px 16px 0",
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 20,
          }}
        >
          {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <button
              type="button"
              key={cat.id}
              className={`category-pill ${cat.id === categorySlug ? "active" : ""}`}
              onClick={() => onNavigate(`category/${cat.id}`)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.2,
          }}
        >
          {categoryLabel}
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "var(--text-secondary)",
            fontSize: "0.95rem",
            marginTop: 8,
          }}
        >
          {articles.length} {articles.length === 1 ? "story" : "stories"}
        </p>
      </div>

      <div style={{ marginBottom: 28 }}>
        <AdSlot size="leaderboard" />
      </div>

      {articles.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px 0",
            color: "var(--text-secondary)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <p>No stories in this category yet.</p>
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: 16 }}
            onClick={() => onNavigate("home")}
          >
            Browse All
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 32,
          }}
        >
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onNavigate={(slug) => onNavigate(`article/${slug}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
