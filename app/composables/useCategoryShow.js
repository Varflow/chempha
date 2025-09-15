export const useCategoryShow = async () => {
  const { findOne } = useStrapi();

  const route = useRoute();
  const id = route.params.id;
  const dataKey = computed(() => `category-${id}`);

  const { data: category } = await useAsyncData(dataKey, () =>
    findOne("categories", id, {
      populate: {
        image: true,
        pod_kategoriyas: {
          populate: {
            image: true,
          },
        },
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

  const subcategories = computed(
    () =>
      category.value.data?.pod_kategoriyas?.map((sub) => ({
        id: sub.documentId,
        name: sub.name,
        image: sub.image?.url,
      })) || []
  );

  return {
    category,
    products,
    subcategories,
  };
};
