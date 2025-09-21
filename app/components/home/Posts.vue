<template>
  <div class="section-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t("Chempha news") }}</h2>
      </div>

      <PostList :limit="4" />

      <div class="section-actions">
        <NuxtLink :to="$localePath('/posts')" class="link-without-decoration">
          <AppButton variant="black">{{ $t("View all news") }}</AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
