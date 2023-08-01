<template>
  <button
    class="button"
    :class="`button--${variant} button--${appearence}`"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ['variant', 'appearence'],
  emits: ['click'],
};
</script>
