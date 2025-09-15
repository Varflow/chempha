export const usePostsList = async ({ limit }) => {
  const { find } = useStrapi();
  const media = useStrapiMedia();

  const { data: posts } = await useAsyncData("posts", () =>
    find("novostis", {
      populate: {
        image: true,
      },
      pagination: { limit },
      sort: "createdAt:desc",
    })
  );

  const postsForView = computed(
    () =>
      posts.value.data.map((post) => {
        return {
          id: post.documentId,
          image: `${media}${post.image.data?.url}`,
          title: post.title,
          text: post.text,
          createdAt: new Date(post.createdAt).toLocaleDateString(),
        };
      }) || []
  );

  return {
    postsForView,
  };
};
