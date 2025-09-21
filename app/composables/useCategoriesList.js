export const useCategoriesList = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();

  const dataKey = computed(() => `categories-${locale.value}`);

  const { data: categories } = await useAsyncData(dataKey, () =>
    find("categories", {
      populate: {
        image: true,
        pod_kategoriyas: true,
      },
      locale: locale.value,
    })
  );

  const ingredientsCategories = computed(
    () =>
      categories.value?.data?.filter(
        (category) => category.section === "ingredients"
      ) || []
  );

  const applicationCategories = computed(
    () =>
      categories.value?.data?.filter(
        (category) => category.section === "application"
      ) || []
  );

  const toView = (collection) => {
    if (!collection) {
      return [];
    }

    return collection.map((collection) => {
      return {
        id: collection.documentId,
        name: collection.Name,
        image: collection.image?.url,
        children: !collection.pod_kategoriyas?.length
          ? null
          : collection.pod_kategoriyas?.map((subcategory) => {
              return {
                id: subcategory.documentId,
                name: subcategory.name,
              };
            }),
      };
    });
  };

  return {
    categories,
    toView,
    ingredientsCategories,
    applicationCategories,
  };
};
