<!-- All categories applications -->
<template>
  <div class="category-page">
    <Head>
      <Title> {{ title }}</Title>
      <Meta name="og:title" :content="` ${title}`" />
      <Meta name="og:image" :content="`${media}${categoryBanner?.url}`" />
    </Head>
    <div class="container">
      <AppPageBanner :title="title" :img="categoryBanner" />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4" v-for="subcategory of subcategories">
          <NuxtLink
            :to="`/subcategory/${subcategory.id}`"
            class="category-card__link"
          >
            <CategoryCard
              :name="subcategory.name"
              :image="subcategory.image ? `${media}${subcategory.image}` : null"
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
    return {
      id: collection.id,
      name: collection.attributes.name,
      image: collection.attributes.image.data?.attributes.url,
    };
  });
};

export default {
  async setup() {
    try {
      const route = useRoute();
      const media = useStrapiMedia();
      const { findOne } = useStrapi();

      const id = route.params.id;
      const category = await findOne("categories", id, {
        populate: {
          image: "*",
          pod_kategoriyas: {
            populate: "*",
          },
        },
      });

      const title = category.data.attributes.Name;
      const categoryBanner = category.data.attributes.image.data?.attributes;
      const subcategories = toView(
        category.data.attributes.pod_kategoriyas?.data
      );

      return {
        title,
        categoryBanner,
        subcategories,
        media,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
