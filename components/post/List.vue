<template>
  <div class="row">
    <div class="col-xl-3" v-for="post of posts">
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
