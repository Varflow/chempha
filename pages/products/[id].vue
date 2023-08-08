<template>
  <div class="container">
    <Head>
      <Title>Chempha - {{ productForView?.name }}</Title>
      <Meta name="description" :content="productForView?.excert" />
      <Meta name="og:title" :content="`Chempha -${productForView?.name}`" />
      <Meta name="og:description" :content="productForView?.excert" />
      <Meta
        name="og:image"
        :content="`${media}${productForView?.image?.url}`"
      />
    </Head>
    <div class="product-page" v-if="productForView">
      <div class="row product-page__header">
        <div class="col-12 col-lg-6 product-page__image">
          <img
            :src="`${media}${productForView.image?.url}`"
            :alt="productForView.name"
          />
        </div>
        <div class="col-12 col-lg-6 product-page__info">
          <h2 class="product-page__name">{{ productForView.name }}</h2>
          <div class="product-page__excert">{{ productForView.excert }}</div>
          <div class="product-page__actions">
            <AppButton
              variant="black"
              appearence="filled"
              @click="openSubmitModal"
              >Submit an application</AppButton
            >
          </div>
        </div>
      </div>

      <div class="product-page__content">
        <div class="product-page__tabs">
          <div class="product-page__tab">Description</div>
        </div>
        <div
          class="product-page__text"
          v-html="productForView.description"
        ></div>
      </div>
    </div>

    <ProductSubmitModal />
  </div>
</template>

<script>
import Micromodal from "micromodal";

export default {
  async setup() {
    try {
      const route = useRoute();
      const media = useStrapiMedia();
      const { findOne } = useStrapi();

      const id = route.params.id;

      const product = await findOne("tovaries", id, { populate: "*" });

      const productForView = {
        ...product.data.attributes,
        image: product.data.attributes?.image.data.attributes,
      };

      return {
        media,
        productForView,
      };
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    openSubmitModal() {
      Micromodal.show("submit-modal");
    },
  },
};
</script>
