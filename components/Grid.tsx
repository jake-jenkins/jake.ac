import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Grid({ blok }: {blok: any}) {
  return (
    <div className="flex gap-4 mb-8" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
