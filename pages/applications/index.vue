<!-- All categories applications -->
<template>
  <div class="category-page">
    <Head>
      <Title> Indredients</Title>
      <Meta name="og:title" :content="` Indredients`" />
      <Meta name="og:image" content="/images/banners/ingredients.jpeg" />
    </Head>
    <div class="container">
      <AppPageBanner
        title="Applications"
        img="/images/banners/ingredients.jpeg"
      />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4" v-for="category of ingredientsForView">
          <NuxtLink
            class="category-card__link"
            :to="
              category.children && category.children.length
                ? `/applications/${category.id}`
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
      id: collection.id,
      name: collection.attributes.Name,
      image: collection.attributes.image.data?.attributes.url,
      children: !collection.attributes.pod_kategoriyas?.data.length
        ? null
        : collection.attributes.pod_kategoriyas?.data.map((subcategory) => {
            return {
              id: subcategory.id,
              name: subcategory.attributes.name,
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

      const categories = await find("categories", { populate: "*" });

      const ingredients = categories.data.filter(
        (category) => category.attributes.section === "application"
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
