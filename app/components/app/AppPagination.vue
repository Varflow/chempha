<template>
  <div class="pagination" v-if="pages > 1">
    <div
      class="page"
      v-for="page of pages"
      key="page"
      @click="onPageChange(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: ["total", "pageSize", "modelValue"],

  data() {
    return {
      pages: 0,
    };
  },

  watch: {
    total: {
      handler(value) {
        if (value === 0) {
          return 0;
        }
        this.pages = Math.ceil(value / this.pageSize);
      },
      immediate: true,
    },
  },

  methods: {
    onPageChange(page) {
      this.$emit("update:modelValue", page);
    },
  },
};
</script>
