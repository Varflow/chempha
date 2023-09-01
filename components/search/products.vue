<template>
  <div class="search-container">
    <input
      type="text"
      class="search-container__input"
      placeholder="Search..."
      :class="{ opened }"
      ref="searchInput"
      v-model="query"
      @blur="close"
      v-on:keyup.enter="search"
    />
    <div class="search-container__icon" @click="open">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="512"
        height="512"
      >
        <path
          d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="js">
export default {
  emits: ["search"],
  data() {
    return {
      opened: false,
      query: "",
    };
  },
  watch: {
    "$route.query.q": {
      handler (value) {
        this.query = value
      }
    }
  },
  methods: {
    open() {
      this.opened = true;
      this.$refs.searchInput.focus()
    },
    close() {
      this.opened = false;
    },
    search() {
      this.$emit("search")
      this.$router.replace({ path: "/search", query: { q: this.query } })
    }
  },
};
</script>
