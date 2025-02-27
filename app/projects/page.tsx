import Card from "@/components/Card";
import type { Metadata } from "next";
import { getLinks } from "../lib";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectPage() {
  const projects = await getLinks("projects");

  return (
    <div className="px-12 py-8 container mx-auto">
      <h1 className="text-indigo-800 text-3xl lg:text-5xl mt-2 mb-4 font-extrabold">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project: any) => (
          <Card key={project.slug} slug={project.slug} />
        ))}
      </div>
    </div>
  );
}
