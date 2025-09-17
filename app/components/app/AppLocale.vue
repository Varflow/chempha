<template>
  <div class="header-locales">
    <NuxtLink :to="$switchLocalePath('en')" style="text-decoration: none">
      <img src="/images/flags/en.svg" alt="English" />
      <!-- <span class="header-menu__link"> EN </span> -->
    </NuxtLink>
    <NuxtLink :to="$switchLocalePath('ee')" style="text-decoration: none">
      <img src="/images/flags/ee.svg" alt="Eesti" />
      <!-- <span class="header-menu__link"> EE </span> -->
    </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>
