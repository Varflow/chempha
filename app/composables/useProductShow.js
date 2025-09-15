export const useProductShow = async () => {
  const { findOne } = useStrapi();

  const route = useRoute();
  const id = route.params.id;
  const dataKey = computed(() => `product-${id}`);

  const { data: product } = await useAsyncData(dataKey, () =>
    findOne("tovaries", id, {
      populate: { image: true },
    })
  );

  const productForView = computed(() => ({
    ...product.value.data,
    image: product.value.data?.image,
  }));

  return {
    productForView,
  };
};
