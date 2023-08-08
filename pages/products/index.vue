<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner title="All Products" />
      <div class="row products-list gy-5">
        <div class="col-12 col-lg-3" v-for="product of productsForView">
          <ProductCard
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :image="`${media}${product.image?.url}`"
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
      const media = useStrapiMedia();
      const { find } = useStrapi();

      const products = await find("tovaries", {
        populate: "*",
      });

      const productsForView = products.data.map((product) => {
        return {
          ...product.attributes,
          id: product.id,
          category: product.attributes.pod_kategoriya?.data.attributes.name,
          image: product.attributes.image.data?.attributes,
        };
      });

      return {
        media,
        productsForView,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
