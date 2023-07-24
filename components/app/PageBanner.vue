<template>
  <div class="page-banner">
    <img :src="img" alt="" v-if="Boolean(img)" class="page-banner__img" />
    <h3 class="page-banner__title" :class="{ 'with-image': Boolean(img) }">{{ title }}</h3>
    <h4 class="page-banner__subtitle" v-if="Boolean(subtitle)">{{ subtitle }}</h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'subtitle'],
};
</script>
