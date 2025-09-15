export const usePostShow = async () => {
  const { findOne } = useStrapi();
  const route = useRoute();

  const id = route.params.id;
  const dataKey = computed(() => `posts-${id}`);

  const { data: post } = await useAsyncData(dataKey, () =>
    findOne("novostis", id, { populate: { image: true } })
  );

  const postForView = {
    ...post.value.data,
    createdAt: new Date(post.value.data.createdAt).toLocaleDateString(),
    image: post.value.data?.image,
  };

  return {
    postForView,
  };
};
