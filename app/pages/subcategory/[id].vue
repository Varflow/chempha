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
      const category = await findOne("pod-kategoriyas", id, {
        populate: {
          image: true,
          tovaries: {
            populate: {
              image: true,
            },
          },
        },
      });

      const products = category.data.tovaries.map((product) => {
        return {
          ...product,
          id: product.documentId,
          category: product.pod_kategoriya?.name,
          image: product.image,
        };
      });

      const title = category.data.name;
      const categoryBanner = category.data.image?.url;

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
