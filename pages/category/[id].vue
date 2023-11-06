<template>
  <div class="category-page">
    <Head>
      <Title> {{ title }}</Title>
      <Meta name="og:title" :content="` ${title}`" />
      <Meta name="og:image" :content="`${media}${categoryBanner?.url}`" />
    </Head>
    <div class="container">
      <AppPageBanner :title="title" :img="`${media}${categoryBanner?.url}`" />

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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      media: null,
      title: "",
      categoryBanner: null,
      products: [],
      loading: false,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const route = useRoute();
      const media = useStrapiMedia();
      const { findOne } = useStrapi();

      const id = route.params.id;
      const category = await findOne("categories", id, {
        populate: {
          image: "*",
          tovaries: {
            populate: "*",
          },
        },
      });

      const products = category.data.attributes.tovaries.data.map((product) => {
        return {
          ...product.attributes,
          id: product.id,
          category: product.attributes.pod_kategoriya?.data?.attributes.Name,
          image: product.attributes.image.data?.attributes,
        };
      });

      const title = category.data.attributes.Name;
      const categoryBanner = category.data.attributes.image.data?.attributes;

      this.loading = false;
      this.media = media;
      this.title = title;
      this.products = products;
      this.categoryBanner = categoryBanner;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
