export const usePostsList = async ({ limit }) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const media = useStrapiMedia();

  const dataKey = computed(() => `posts-${locale.value}`);

  const { data: posts } = await useAsyncData(dataKey, () =>
    find("novostis", {
      populate: {
        image: true,
      },
      pagination: { limit },
      locale: locale.value,
      sort: "createdAt:desc",
    })
  );

  const postsForView = computed(
    () =>
      posts.value?.data?.map((post) => {
        return {
          id: post.documentId,
          image: `${media}${post.image?.url}`,
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
