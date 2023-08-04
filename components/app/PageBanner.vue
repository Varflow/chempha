<template>
  <div
    class="page-banner"
    :class="{ 'with-image': img && !img.includes('undefined') }"
  >
    <img
      :src="img"
      v-if="Boolean(img && !img.includes('undefined'))"
      alt=""
      class="page-banner__img"
    />
    <h3 class="page-banner__title">{{ title }}</h3>
    <h4 class="page-banner__subtitle" v-if="Boolean(subtitle)">
      {{ subtitle }}
    </h4>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "subtitle"],
};
</script>
