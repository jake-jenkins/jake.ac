import Link from "next/link";
import Image from "next/image";

export default async function Card({ slug }: { slug: string }) {
  const getProject = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?token=${process.env.ACCESS_TOKEN}
  `
  );
  const project = await getProject.json();

  return (
    <Link
      href={project.story.full_slug}
      className="border-b-2 border-lime-500 bg-white shadow-md w-full mb-8"
    >
      <Image
        className="w-full"
        src={project.story.content.image.filename}
        width={400}
        height={190}
        alt={`${project.story.name} image`}
      />
      <div className="h-48 p-4 mb-4 flex flex-col">
        <div className="text-xl flex font-medium h-16 items-center pb-2">
          {project.story.name}
        </div>
        <span className="flex-1">{project.story.content.description}</span>
        <span className="block mt-6 text-sm">
          {project.story.content.category}
        </span>
      </div>
    </Link>
  );
}
