<template>
  <div class="section-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Chempha news</h2>
      </div>

      <PostList :limit="4" />

      <div class="section-actions">
        <NuxtLink to="/posts" class="link-without-decoration">
          <AppButton variant="black">View all news</AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
