<template>
  <div class="section-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Chempha news</h2>
      </div>

      <PostList :posts="posts" />

      <div class="section-actions">
        <AppButton variant="black">View all news</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const posts = [
      {
        title: 'Innovative Ingredient Improves Skin Hydration',
        category: 'beauty',
        createdAt: '25 АПР 2023',
        image: '/images/product.jpeg',
      },
      {
        title:
          'Personal Care Company Partners with Sustainability Initiative to Promote Eco-Friendly Practices',
        category: 'beauty',
        createdAt: '25 АПР 2023',
        image: '/images/product.jpeg',
      },
      {
        title: 'Innovative Ingredient Improves Skin Hydration',
        category: 'beauty',
        createdAt: '25 АПР 2023',
        image: '/images/product.jpeg',
      },
      {
        title: 'Innovative Ingredient Improves Skin Hydration',
        category: 'beauty',
        createdAt: '25 АПР 2023',
        image: '/images/product.jpeg',
      },
    ];

    return {
      posts,
    };
  },
};
</script>
