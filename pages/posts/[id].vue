<template>
  <div class="post-page" v-if="postForView">
    <div class="container">
      <div class="col-12 col-lg-10 offset-lg-1">
        <div class="post-page__image">
          <img :src="`${media}${postForView.image.url}`" />
        </div>
        <div class="post-page__meta">{{ postForView.createdAt }}</div>
        <h2 class="post-page__title">{{ postForView.title }}</h2>
        <div class="post-page__text" v-html="postForView.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    try {
      const route = useRoute();
      const media = useStrapiMedia();
      const { findOne } = useStrapi();

      const id = route.params.id;

      const post = await findOne('novostis', id, { populate: '*' });

      const postForView = {
        ...post.data.attributes,
        createdAt: new Date(post.data.attributes.createdAt).toLocaleDateString(),
        image: post.data.attributes?.image.data.attributes,
      };

      return {
        media,
        postForView,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
