<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner :title="$t('All Products')" />
      <div class="row products-list gy-5">
        <div class="col-12 col-lg-3" v-for="product of products">
          <ProductCard
            :id="product.documentId"
            :name="product.name"
            :category="product.category"
            :image="`${media}${product.image?.url}`"
          />
        </div>
      </div>
      <AppPagination
        :pageCount="pageCount"
        @change="(value) => (page = value)"
      />
    </div>
  </div>
</template>

<script setup>
const page = ref(1);
const media = useStrapiMedia();
const { pageCount, productsForView: products } = await useProductsList(page);
</script>
