export const useProductShow = async () => {
  const { locale } = useLocale();
  const { findOne } = useStrapi();

  const route = useRoute();
  const id = route.params.id;
  const dataKey = computed(() => `product-${id}-${locale.value}`);

  const { data: product } = await useAsyncData(dataKey, () =>
    findOne("tovaries", id, {
      populate: { image: true },
      locale: locale.value,
    })
  );

  const productForView = computed(
    () =>
      ({
        ...product.value?.data,
        image: product.value?.data?.image,
      } || [])
  );

  return {
    productForView,
  };
};
