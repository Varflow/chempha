<template>
  <div class="pagination" v-if="pageCount > 1">
    <div
      v-for="p of pageCount"
      class="page"
      :key="p"
      @click="$emit('change', p)"
    >
      {{ p }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["pageCount"]);
const emit = defineEmits(["change"]);
</script>
