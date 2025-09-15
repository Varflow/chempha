export const useSubcategoryShow = async () => {
  const { findOne } = useStrapi();

  const route = useRoute();
  const id = route.params.id;
  const dataKey = computed(() => `subcategory-${id}`);

  const { data: category } = await useAsyncData(dataKey, () =>
    findOne("pod-kategoriyas", id, {
      populate: {
        image: true,
        tovaries: {
          populate: {
            image: true,
          },
        },
      },
    })
  );

  const products = computed(
    () =>
      category.value.data?.tovaries?.map((product) => ({
        ...product,
        id: product.documentId,
        category: product.pod_kategoriya?.Name,
        image: product.image,
      })) || []
  );

  return {
    category,
    products,
  };
};
