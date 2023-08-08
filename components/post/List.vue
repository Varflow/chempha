<template>
  <div class="row">
    <div class="col-lg-4 col-xl-3 gy-5" v-for="post of postsForView">
      <NuxtLink :to="`/posts/${post.id}`" class="link-without-decoration">
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

<script>
export default {
  props: ["limit"],
  async setup(props) {
    try {
      const media = useStrapiMedia();
      const { find } = useStrapi();

      const posts = await find("novostis", {
        populate: "*",
        pagination: { limit: props.limit },
      });

      const postsForView = posts.data.map((post) => {
        return {
          id: post.id,
          image: `${media}${post.attributes.image.data?.attributes.url}`,
          title: post.attributes.title,
          text: post.attributes.text,
          createdAt: new Date(post.attributes.createdAt).toLocaleDateString(),
        };
      });

      return {
        postsForView,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
