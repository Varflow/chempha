<template>
  <AppMaintenancePage v-if="isAdmin === false" />
  <NuxtLayout v-else>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { isAdmin } = useAdminAuth();
console.log('isAdmin:', isAdmin);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
