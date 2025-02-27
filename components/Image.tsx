import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Paragraph({ blok }: { blok: any }) {
  return (
    <div className="flex justify-center">
      <Image
        className="mb-8"
        src={blok.image.filename}
        width={800}
        height={400}
        alt="image"
        {...storyblokEditable(blok)}
      />
    </div>
  );
}
