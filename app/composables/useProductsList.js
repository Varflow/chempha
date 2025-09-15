export const useProductsList = async (page) => {
  const pageSize = 25;

  const { find } = useStrapi();
  const dataKey = computed(
    () => `products-page-${page.value}-size-${pageSize}`
  );

  const { data: products } = await useAsyncData(dataKey, () =>
    find("tovaries", {
      populate: {
        image: true,
      },
      pagination: { page: page.value, pageSize },
    })
  );

  const productsForView = computed(
    () =>
      products.value.data.map((product) => {
        return {
          ...product,
          id: product.id,
          category: product.pod_kategoriya?.name,
          image: product.image,
        };
      }) || []
  );

  const pageCount = computed(() => products.value.meta.pagination.pageCount);

  return {
    pageCount,
    productsForView,
  };
};
