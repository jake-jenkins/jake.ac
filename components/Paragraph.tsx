import { storyblokEditable } from "@storyblok/react/rsc";

export default function Paragraph({ blok }: { blok: any }) {
  return (
    <p className="mb-4 flex-1" {...storyblokEditable(blok)}>
      {blok.content}
    </p>
  );
}
