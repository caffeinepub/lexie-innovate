import { useState } from "react";
import BottomNav from "./components/layout/BottomNav";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutPage from "./pages/AboutPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";

type PageState =
  | { id: "home" }
  | { id: "discover" }
  | { id: "article"; slug: string }
  | { id: "category"; slug: string }
  | { id: "about" }
  | { id: "contact" }
  | { id: "bookmarks" }
  | { id: "profile" };

export default function App() {
  const [page, setPage] = useState<PageState>({ id: "home" });

  const navigate = (target: string) => {
    if (target === "home") setPage({ id: "home" });
    else if (target === "discover") setPage({ id: "discover" });
    else if (target === "about") setPage({ id: "about" });
    else if (target === "contact") setPage({ id: "contact" });
    else if (target === "bookmarks") setPage({ id: "bookmarks" });
    else if (target === "profile") setPage({ id: "profile" });
    else if (target.startsWith("article/"))
      setPage({ id: "article", slug: target.slice(8) });
    else if (target.startsWith("category/"))
      setPage({ id: "category", slug: target.slice(9) });
    else setPage({ id: "home" });
    window.scrollTo(0, 0);
  };

  const currentPageId =
    page.id === "article" || page.id === "category"
      ? `${page.id}/${(page as { id: string; slug: string }).slug}`
      : page.id;

  const renderPage = () => {
    switch (page.id) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "discover":
        return <DiscoverPage onNavigate={navigate} />;
      case "article":
        return <ArticleDetailPage slug={page.slug} onNavigate={navigate} />;
      case "category":
        return <CategoryPage categorySlug={page.slug} onNavigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "bookmarks":
        return (
          <div
            style={{
              paddingTop: 80,
              maxWidth: 720,
              margin: "0 auto",
              padding: "80px 16px 0",
              textAlign: "center",
              color: "var(--text-secondary)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.8rem",
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Saved Stories
            </h2>
            <p>Bookmarking will be available soon. Sign in to save stories.</p>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: 20 }}
              onClick={() => navigate("home")}
            >
              Browse Stories
            </button>
          </div>
        );
      case "profile":
        return (
          <div
            style={{
              paddingTop: 80,
              maxWidth: 720,
              margin: "0 auto",
              padding: "80px 16px 0",
              textAlign: "center",
              color: "var(--text-secondary)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.8rem",
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Your Profile
            </h2>
            <p>Sign in to access your reading history and preferences.</p>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: 20 }}
            >
              Sign In
            </button>
          </div>
        );
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  const showFooter = page.id !== "article";

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)" }}>
      <Header currentPage={currentPageId} onNavigate={navigate} />
      <main style={{ minHeight: "80vh" }}>{renderPage()}</main>
      {showFooter && <Footer onNavigate={navigate} />}
      <BottomNav currentPage={page.id} onNavigate={navigate} />
    </div>
  );
}
