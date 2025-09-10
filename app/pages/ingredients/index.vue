<!-- All categories applications -->
<template>
  <div class="category-page">
    <Head>
      <Title> Ingredients</Title>
      <Meta name="og:title" :content="` Ingredients`" />
      <Meta name="og:image" content="/images/banners/ingredients.jpeg" />
    </Head>
    <div class="container">
      <AppPageBanner
        title="Ingredients"
        img="/images/banners/ingredients.jpeg"
      />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4" v-for="category of ingredientsForView">
          <NuxtLink
            class="category-card__link"
            :to="
              category.children && category.children.length
                ? `/ingredients/${category.id}`
                : `/category/${category.id}`
            "
          >
            <CategoryCard
              :name="category.name"
              :image="category.image ? `${media}${category.image}` : null"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const toView = (collection) => {
  if (!collection) {
    return [];
  }

  return collection.map((collection) => {
    console.log(collection);
    return {
      id: collection.documentId,
      name: collection.Name,
      image: collection.image.data?.url,
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

export default {
  async setup() {
    try {
      const { find } = useStrapi();
      const media = useStrapiMedia();

      const categories = await find("categories", {
        populate: {
          image: true,
          pod_kategoriyas: true,
        },
      });

      const ingredients = categories.data.filter(
        (category) => category.section === "ingredients"
      );

      const ingredientsForView = toView(ingredients);

      return {
        ingredientsForView,
        media,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
