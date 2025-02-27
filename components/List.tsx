import CheckIcon from "./CheckIcon";

export default function List({ blok }: { blok: any }) {
  return (
    <ul>
      {blok.items.map((item: any) => (
        <li key={item._uid}><CheckIcon /> {item.text}</li>
      ))}
    </ul>
  );
}
