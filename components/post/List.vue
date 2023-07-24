<template>
  <div class="row">
    <div class="col-lg-4 col-xl-3 gy-5" v-for="post of posts">
      <PostCard
        :title="post.title"
        :category="post.category"
        :createdAt="post.createdAt"
        :image="post.image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
};
</script>
