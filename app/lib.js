export async function fetchStoryBySlug(slug) {
  const contentVersion = "draft";
  const cv = new Date().getTime() / 1000;

  const searchParamsData = {
    token: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
    cv,
    version: contentVersion,
  };

  const searchParams = new URLSearchParams(searchParamsData);

  const { story } = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${
      slug?.join("/") || ""
    }?${searchParams.toString()}`,
    {
      next: {
        tags: ["page"],
      },
    }
  ).then((res) => res.json());

  return {
    story: story,
  };
}

export async function getLinks(filter, limit, tag) {
  let res = [];
  const hasFilter = filter ? `&starts_with=${filter}` : "";
  const hasTag = tag ? `&with_tag=${tag}` : "";
  const hasLimit = limit ? `&per_page=${limit}` : "";
  const getLinkCall = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?token=${process.env.ACCESS_TOKEN}&excluding_fields=body${hasFilter}${hasTag}${hasLimit}`
  );
  const links = await getLinkCall.json();
  links.stories.map((link) => {
    res.push({
      name: link.name,
      slug: `/${link.full_slug}`,
      shortSlug: link.full_slug.split("/"),
      created: new Date(link.created_at),
    });
  });
  return res;
}
