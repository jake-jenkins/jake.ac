import TagIcon from "./TagIcon";

export default async function TagList({ tags }: { tags: string[] }) {
  return (
    <ul>
      {tags.map((tag: string) => (
        <li key={tag} className="flex items-center cursor-default">
          <TagIcon />
          {tag}
        </li>
      ))}
    </ul>
  );
}
