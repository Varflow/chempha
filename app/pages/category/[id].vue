<template>
  <div class="category-page">
    <Head>
      <Title> {{ title }}</Title>
      <Meta name="og:title" :content="` ${title}`" />
      <Meta name="og:image" :content="bannerImage" />
    </Head>
    <div class="container">
      <AppPageBanner :title="title" :img="bannerImage" />

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

<script setup>
const media = useStrapiMedia();
const { category, products } = await useCategoryShow();

const title = computed(() => category.value?.data.Name);
const categoryBanner = computed(() => category.value?.data.image);

const bannerImage = computed(() => `${media}${categoryBanner.value?.url}`);
</script>
