import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import Image from "next/image";

export default function Project({ blok }: { blok: any }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.image.filename ? (
        <div className="heroWrapper">
          <Image
            priority
            src={blok.image.filename ?? ""}
            alt={`image`}
            className="heroImage border-b-4 border-lime-300"
            fill
          />
        </div>
      ) : null}
      <div className="container mx-auto px-4 py-8">
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
