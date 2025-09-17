export const useCategoriesList = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();

  const { data: categories } = await useAsyncData("categories", () =>
    find("categories", {
      populate: {
        image: true,
        pod_kategoriyas: true,
      },
      locale: locale.value,
    })
  );

  const getIngredientsCategories = () =>
    categories.value?.data?.filter(
      (category) => category.section === "ingredients"
    ) || [];

  const getApplicationCategories = () =>
    categories.value?.data?.filter(
      (category) => category.section === "application"
    ) || [];

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
    getIngredientsCategories,
    getApplicationCategories,
  };
};
