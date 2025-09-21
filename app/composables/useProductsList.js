export const useProductsList = async (page, pageSize = 25) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const dataKey = computed(
    () => `products-page-${page.value}-size-${pageSize}-${locale.value}`
  );

  const { data: products } = await useAsyncData(dataKey, () =>
    find("tovaries", {
      populate: {
        image: true,
      },
      pagination: { page: page.value, pageSize },
      locale: locale.value,
    })
  );

  const productsForView = computed(
    () =>
      products.value?.data?.map((product) => {
        return {
          ...product,
          id: product.id,
          category: product.pod_kategoriya?.name,
          image: product.image,
        };
      }) || []
  );

  const pageCount = computed(
    () => products.value?.meta?.pagination?.pageCount || 0
  );

  return {
    pageCount,
    productsForView,
  };
};
