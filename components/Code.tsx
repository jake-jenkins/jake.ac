import { storyblokEditable } from "@storyblok/react/rsc";

export default function Code({ blok }: { blok: any }) {
  return (
    <div
      className="m-4 bg-slate-800 p-4 text-white font-mono rounded-t-xl border-b-4 border-sky-600 pl-8"
      {...storyblokEditable(blok)}
    >
      {blok.content}
    </div>
  );
}
