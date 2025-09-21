export const useSubcategoryShow = async () => {
  const { findOne } = useStrapi();
  const { locale } = useLocale();

  const route = useRoute();
  const id = route.params.id;
  const dataKey = computed(() => `subcategory-${id}-${locale.value}`);

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
      locale: locale.value,
    })
  );

  const products = computed(
    () =>
      category.value?.data?.tovaries?.map((product) => ({
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
