<template>
  <div class="product-card">
    <div class="product-card__image-wrapper">
      <nuxt-img :src="image" :alt="name" class="product-card__image" />
    </div>
    <h4 class="product-card__category">{{ category }}</h4>
    <h4 class="product-card__name">{{ name }}</h4>
  </div>
</template>

<script>
export default {
  props: ['name', 'category', 'image'],
};
</script>
