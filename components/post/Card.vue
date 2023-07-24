<template>
  <div class="post-card">
    <div class="post-card__image-wrapper">
      <img :src="image" :alt="title" />
    </div>

    <div class="post-card__meta">
      <span class="post-card__createdAt">{{ createdAt }}</span>
      <h5 class="post-card__category">{{ category }}</h5>
    </div>

    <h4 class="post-card__title">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'category', 'createdAt', 'image'],
};
</script>
