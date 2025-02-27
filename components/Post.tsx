import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function Post({ blok }: { blok: any }) {
  return (
    <main {...storyblokEditable(blok)}>
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-indigo-800 text-3xl lg:text-5xl mt-2 mb-4 font-extrabold">
          {blok.heading}
        </h1>
        {blok.body.map((nestedBlok: any) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </main>
  );
}
