export default function AboutPage() {
  return (
    <div
      style={{
        paddingTop: 72,
        maxWidth: 720,
        margin: "0 auto",
        padding: "72px 16px 0",
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
        }}
      >
        About Us
      </span>
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          marginTop: 8,
          marginBottom: 24,
        }}
      >
        We Cover the Builders Shaping Global Markets
      </h1>
      <img
        src="https://picsum.photos/seed/about-lexie/1200/500"
        alt="Lexie Innovate editorial team"
        style={{
          width: "100%",
          borderRadius: 16,
          marginBottom: 36,
          objectFit: "cover",
          height: 280,
        }}
      />
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          lineHeight: 1.85,
          color: "var(--text-primary)",
        }}
      >
        <p style={{ marginBottom: 20 }}>
          <strong>Lexie Innovate</strong> is an independent editorial
          publication focused on the founders, products, and companies driving
          meaningful change across global markets. We believe the most important
          business stories are often the ones least covered: founders building
          outside the spotlight, products solving unglamorous problems, and
          companies growing without the endorsement of Silicon Valley&apos;s
          dominant narrative.
        </p>
        <p style={{ marginBottom: 20 }}>
          Our coverage spans six areas: founder stories, product-driven
          companies, service businesses, global markets, innovation, and company
          building. We don&apos;t rank or award. We report, analyze, and give
          context.
        </p>
        <p style={{ marginBottom: 20 }}>
          We are deliberately global in scope. Our editorial team sources
          stories from West Africa, Southeast Asia, Latin America, Eastern
          Europe, and the Middle East as readily as from London or New York.
          Business happens everywhere. Good journalism should follow it.
        </p>
        <p style={{ marginBottom: 36 }}>
          Lexie Innovate is editorially independent. We are funded by digital
          advertising and do not accept payment for coverage, guaranteed
          placements, or editorial endorsements. If you&apos;d like to reach our
          team, use the contact page.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 20,
            marginBottom: 36,
          }}
        >
          {[
            { label: "Stories Published", value: "200+" },
            { label: "Countries Covered", value: "45" },
            { label: "Topics", value: "6 Core Areas" },
            { label: "Contributors", value: "Global Team" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                background: "var(--bg-card)",
                borderRadius: 12,
                border: "1px solid var(--border-subtle)",
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "var(--brand)",
                  marginBottom: 4,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
