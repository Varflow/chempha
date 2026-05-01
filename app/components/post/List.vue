<template>
  <div class="row">
    <div class="col-lg-4 col-xl-3 gy-5" v-for="post of postsForView">
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
</template>

<script setup>
const props = defineProps(["limit"]);
const { postsForView } = await usePostsList(ref(1), props.limit);
</script>
