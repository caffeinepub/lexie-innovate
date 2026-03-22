import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AdSlot from "../components/AdSlot";
import ArticleCard from "../components/ArticleCard";
import SectionHeader from "../components/SectionHeader";
import { getArticleBySlug, getRelatedArticles } from "../data/articles";

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export default function ArticleDetailPage({
  slug,
  onNavigate,
}: ArticleDetailPageProps) {
  const [readProgress, setReadProgress] = useState(0);
  const articleRef = useRef<HTMLDivElement>(null);
  const article = getArticleBySlug(slug);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: articleRef is a stable ref
  useEffect(() => {
    const handleScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      setReadProgress(Math.min(100, (scrolled / total) * 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <div
        style={{
          paddingTop: 80,
          textAlign: "center",
          color: "var(--text-secondary)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <p>Article not found.</p>
        <button
          type="button"
          className="btn-primary"
          style={{ marginTop: 16 }}
          onClick={() => onNavigate("home")}
        >
          Go Home
        </button>
      </div>
    );
  }

  const related = getRelatedArticles(slug, article.category);

  return (
    <div style={{ paddingTop: 60 }}>
      {/* Reading progress bar */}
      <div
        style={{
          position: "fixed",
          top: 60,
          left: 0,
          zIndex: 101,
          height: 3,
          width: `${readProgress}%`,
          background: "var(--brand)",
          transition: "width 0.1s ease",
          borderRadius: "0 2px 2px 0",
        }}
      />

      {/* Hero image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxHeight: 480,
          overflow: "hidden",
        }}
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            width: "100%",
            height: 480,
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(15,17,20,1) 0%, rgba(15,17,20,0.2) 100%)",
          }}
        />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          {/* Main article */}
          <article
            style={{ flex: 1, minWidth: 0, maxWidth: 720 }}
            ref={articleRef}
          >
            <div
              style={{
                marginTop: -80,
                position: "relative",
                zIndex: 1,
                marginBottom: 32,
              }}
            >
              <button
                type="button"
                onClick={() => onNavigate("home")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-secondary)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.82rem",
                  marginBottom: 16,
                  padding: 0,
                }}
              >
                <ArrowLeft size={16} /> Back to stories
              </button>

              <button
                type="button"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--brand)",
                  fontFamily: "Inter, sans-serif",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                onClick={() => onNavigate(`category/${article.category}`)}
              >
                {article.category}
              </button>

              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                  marginTop: 12,
                  marginBottom: 16,
                }}
              >
                {article.title}
              </h1>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                {article.summary}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 8,
                }}
              >
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {article.author}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {article.publishedAt}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--text-muted)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  <Clock size={14} />
                  {article.readTime} min read
                  <button
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-secondary)",
                      marginLeft: 8,
                      display: "flex",
                      alignItems: "center",
                    }}
                    title="Share"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                height: 1,
                background: "var(--border-subtle)",
                marginBottom: 32,
              }}
            />

            {/* Article body */}
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "var(--text-primary)",
              }}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: article HTML content is trusted editorial data
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* In-content ad */}
            <div style={{ margin: "36px 0" }}>
              <AdSlot size="leaderboard" label="Sponsored" />
            </div>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 36,
                marginTop: 24,
              }}
            >
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    padding: "4px 12px",
                    borderRadius: 4,
                    background: "var(--bg-panel)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author bio */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: 16,
                border: "1px solid var(--border-subtle)",
                padding: "24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                marginBottom: 36,
              }}
            >
              <img
                src={article.authorAvatar}
                alt={article.author}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {article.author}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {article.authorBio}
                </p>
              </div>
            </div>

            {/* Below article ad */}
            <AdSlot size="rectangle" label="Advertisement" />

            {/* Related articles */}
            {related.length > 0 && (
              <div style={{ marginTop: 48 }}>
                <SectionHeader title="Related Stories" />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: 20,
                  }}
                >
                  {related.map((a) => (
                    <ArticleCard
                      key={a.id}
                      article={a}
                      onNavigate={(s) => onNavigate(`article/${s}`)}
                    />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
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
              <AdSlot size="halfpage" label="Advertisement" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
