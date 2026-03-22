interface SectionHeaderProps {
  title: string;
  showSeeAll?: boolean;
  onSeeAll?: () => void;
}

export default function SectionHeader({
  title,
  showSeeAll,
  onSeeAll,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div className="accent-line" />
      {showSeeAll && (
        <button
          type="button"
          className="see-all"
          onClick={onSeeAll}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          See All &rarr;
        </button>
      )}
    </div>
  );
}
