<template>
  <button class="button" :class="`button--${variant}`">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['variant'],
};
</script>
