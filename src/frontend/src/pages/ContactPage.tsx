import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      if (actor) {
        await actor.submitContactForm(form.name, form.email, form.message);
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-panel)",
    border: "1px solid var(--border-subtle)",
    borderRadius: 10,
    padding: "12px 16px",
    color: "var(--text-primary)",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.15s ease",
    display: "block",
  };

  return (
    <div
      style={{
        paddingTop: 72,
        maxWidth: 640,
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
        Get in Touch
      </span>
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          marginTop: 8,
          marginBottom: 12,
        }}
      >
        Contact the Team
      </h1>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          color: "var(--text-secondary)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          marginBottom: 36,
        }}
      >
        Story tips, editorial inquiries, partnership questions, or just a hello.
        We read everything.
      </p>

      {status === "sent" ? (
        <div
          style={{
            background: "var(--bg-card)",
            borderRadius: 16,
            border: "1px solid rgba(227,255,0,0.2)",
            padding: "36px 28px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: 12 }}>&#10003;</div>
          <h3
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.4rem",
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            Message sent
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
            }}
          >
            We&apos;ll be in touch soon.
          </p>
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: 20 }}
            onClick={() => setStatus("idle")}
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div>
            <label
              htmlFor="contact-name"
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Name
            </label>
            <input
              id="contact-name"
              style={inputStyle}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Email
            </label>
            <input
              id="contact-email"
              style={inputStyle}
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              style={
                {
                  ...inputStyle,
                  minHeight: 160,
                  resize: "vertical",
                } as React.CSSProperties
              }
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              placeholder="Tell us what's on your mind..."
              required
            />
          </div>
          {status === "error" && (
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                color: "#ff6b6b",
              }}
            >
              Something went wrong. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="btn-primary"
            style={{
              alignSelf: "flex-start",
              padding: "12px 32px",
              fontSize: "0.85rem",
              opacity: status === "sending" ? 0.7 : 1,
            }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
