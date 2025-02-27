import { StoryblokStory, StoryblokServerComponent } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import { fetchStoryBySlug } from "@/app/lib";
import { getLinks } from "@/app/lib";
import TagList from "@/components/TagList";

export async function generateStaticParams() {
  const links = await getLinks();
  let res = [];
  links.map((link) => {
    res.push({ slug: link.shortSlug });
  });
  return res;
}

export async function generateMetadata({ params }) {
  const correctPath = (await params).slug;
  const { story } = await fetchStoryBySlug(correctPath);
  return {
    title: story.name,
    description: story.content.description || "",
  };
}

export default async function Page({ params }) {
  const correctPath = (await params).slug;
  const isDraftModeEnabled = process.env.IS_PREVIEW === "true";
  const { story } = await fetchStoryBySlug(correctPath);

  const tags = story.tag_list.filter((tag) => tag !== "Featured");

  if (!story) {
    return <div>404</div>;
  }

  if (isDraftModeEnabled) {
    return (
      <StoryblokProvider>
        <>
          <StoryblokStory story={story} />{" "}
          <div className="container mx-auto px-4 mb-8">
            <TagList tags={tags} />
          </div>
        </>
      </StoryblokProvider>
    );
  }

  return (
    <>
      <StoryblokServerComponent blok={story.content} />
      <div className="container mx-auto px-4 py-8">
        {tags.length > 0 ? <TagList tags={tags} /> : null}
      </div>
    </>
  );
}
