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
    <NuxtLink :to="$switchLocalePath('lv')" style="text-decoration: none">
      <img src="/images/flags/lv.svg" alt="Latvian" />
      <!-- <span class="header-menu__link"> LV </span> -->
    </NuxtLink>
    <NuxtLink :to="$switchLocalePath('lt')" style="text-decoration: none">
      <img src="/images/flags/lt.svg" alt="Lithuanian" />
      <!-- <span class="header-menu__link"> LT </span> -->
    </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>
