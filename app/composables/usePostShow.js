export const usePostShow = async () => {
  const { locale } = useLocale();
  const { findOne } = useStrapi();
  const route = useRoute();

  const id = route.params.id;
  const dataKey = computed(() => `posts-${id}-${locale.value}`);

  const { data: post } = await useAsyncData(dataKey, () =>
    findOne("novostis", id, { populate: { image: true }, locale: locale.value })
  );

  const postForView = {
    ...post.value?.data,
    createdAt: new Date(post.value?.data.createdAt).toLocaleDateString(),
    image: post.value?.data?.image,
  };

  return {
    postForView,
  };
};
