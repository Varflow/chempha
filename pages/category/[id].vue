<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner :title="title" />
      <div class="row products-list gy-5">
        <div class="col-12 col-lg-3" v-for="product of products">
          <ProductCard
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :image="`${media}${product.image.url}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    try {
      const route = useRoute();
      const media = useStrapiMedia();
      const { findOne } = useStrapi();

      const id = route.params.id;
      const category = await findOne('pod-kategoriyas', id, {
        populate: {
          tovaries: {
            populate: '*',
          },
        },
      });

      const products = category.data.attributes.tovaries.data.map((product) => {
        return {
          ...product.attributes,
          id: product.id,
          category: product.attributes.pod_kategoriya.data.attributes.name,
          image: product.attributes.image.data?.attributes,
        };
      });

      const title = category.data.attributes.name;

      return {
        media,
        title,
        products,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
