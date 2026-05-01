export const usePostsList = async (page, pageSize) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const media = useStrapiMedia();

  const dataKey = computed(
    () => `posts-page-${page.value}-size-${pageSize}-${locale.value}`
  );

  const { data: posts } = await useAsyncData(dataKey, () =>
    find("novostis", {
      populate: {
        image: true,
      },
      pagination: { page: page.value, pageSize },
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

  const pageCount = computed(
    () => posts.value?.meta?.pagination?.pageCount || 0
  );

  return {
    postsForView,
    pageCount,
  };
};
