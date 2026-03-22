import { useState } from "react";
import AdSlot from "../components/AdSlot";
import ArticleCard from "../components/ArticleCard";
import SectionHeader from "../components/SectionHeader";
import { CATEGORIES, articles, getFeaturedArticles } from "../data/articles";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const featured = getFeaturedArticles();
  const [heroIndex, setHeroIndex] = useState(0);
  const heroArticle = featured[heroIndex % featured.length];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const trendingArticles = articles.slice(0, 6);
  const editorsPicks = articles.filter((a) => !a.isFeatured).slice(0, 3);

  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ margin: "16px 0" }}>
          <AdSlot size="leaderboard" />
        </div>

        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: 28, position: "relative" }}>
              <ArticleCard
                article={heroArticle}
                variant="featured"
                onNavigate={(slug) => onNavigate(`article/${slug}`)}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 24,
                  display: "flex",
                  gap: 6,
                  zIndex: 2,
                }}
              >
                {featured.slice(0, 4).map((a, i) => (
                  <button
                    type="button"
                    key={a.id}
                    onClick={() => setHeroIndex(i)}
                    aria-label={`Show featured story ${i + 1}`}
                    style={{
                      width: i === heroIndex ? 24 : 6,
                      height: 4,
                      borderRadius: 2,
                      background:
                        i === heroIndex
                          ? "var(--brand)"
                          : "rgba(255,255,255,0.3)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.25s ease",
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                paddingBottom: 4,
                marginBottom: 28,
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

            <SectionHeader
              title="Trending Now"
              showSeeAll
              onSeeAll={() => onNavigate("discover")}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
                marginBottom: 36,
              }}
            >
              {(activeCategory === "all" ? trendingArticles : filteredArticles)
                .slice(0, 6)
                .map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onNavigate={(slug) => onNavigate(`article/${slug}`)}
                  />
                ))}
            </div>

            <div style={{ margin: "28px 0" }}>
              <AdSlot size="leaderboard" label="Sponsored Content" />
            </div>

            <SectionHeader
              title="Editor's Picks"
              showSeeAll
              onSeeAll={() => onNavigate("discover")}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
                marginBottom: 36,
              }}
            >
              {editorsPicks.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onNavigate={(slug) => onNavigate(`article/${slug}`)}
                />
              ))}
            </div>
          </div>

          <aside
            className="desktop-sidebar"
            style={{ width: 300, flexShrink: 0 }}
          >
            <div
              style={{
                position: "sticky",
                top: 76,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <AdSlot size="rectangle" label="Partner Spotlight" />
              <div
                style={{
                  background: "var(--bg-card)",
                  borderRadius: 16,
                  border: "1px solid var(--border-subtle)",
                  padding: "20px 16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: 16,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Top Stories
                </h3>
                {articles.slice(0, 6).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="compact"
                    onNavigate={(slug) => onNavigate(`article/${slug}`)}
                  />
                ))}
              </div>
              <AdSlot size="halfpage" label="Advertisement" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
