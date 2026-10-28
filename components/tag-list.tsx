type TagListProps = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className = "" }: TagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
