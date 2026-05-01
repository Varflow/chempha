<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner :title="$t('All News')" />
      <div class="row">
        <div
          class="col-lg-4 col-xl-3 gy-5"
          v-for="post of posts"
          :key="post.id"
        >
          <NuxtLink
            :to="$localePath(`/posts/${post.id}`)"
            class="link-without-decoration"
          >
            <PostCard
              :title="post.title"
              :category="post.category"
              :createdAt="post.createdAt"
              :image="post.image"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="posts-pagination">
        <AppPagination
          :pageCount="pageCount"
          @change="(value) => (page = value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const page = ref(1);
const { pageCount, postsForView: posts } = await usePostsList(page, 12);
</script>

<style lang="scss" scoped>
.posts-pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>