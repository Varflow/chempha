<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner title="All Products" />
      <div class="row products-list gy-5">
        <div class="col-12 col-lg-3" v-for="product of products">
          <ProductCard
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :image="`${media}${product.image?.url}`"
          />
        </div>
      </div>
      <AppPagination :total="total" :pageSize="pageSize" v-model="page" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      total: 0,
      pageSize: 25,
      media: null,
      page: 1,
    };
  },
  watch: {
    page: {
      async handler() {
        try {
          const media = useStrapiMedia();
          const { find } = useStrapi();

          const products = await find("tovaries", {
            populate: "*",
            pagination: { page: this.page },
          });

          const productsForView = products.data.map((product) => {
            return {
              ...product.attributes,
              id: product.id,
              category: product.attributes.pod_kategoriya?.data.attributes.name,
              image: product.attributes.image.data?.attributes,
            };
          });

          this.media = media;
          this.products = productsForView;
          this.total = products.meta.pagination.total;
          this.pageSize = products.meta.pagination.pageSize;
        } catch (error) {
          console.log(error);
        }
      },
      immediate: true,
    },
  },
};
</script>
