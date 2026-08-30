<template>
  <div class="header-locales">
    <NuxtLink :to="switchTo('en')" :replace class="header-locales__item" style="text-decoration: none">
      <img src="/images/flags/en.svg" alt="English" />
    </NuxtLink>
    <NuxtLink :to="switchTo('ee')" :replace class="header-locales__item" style="text-decoration: none">
      <img src="/images/flags/ee.svg" alt="Eesti" />
    </NuxtLink>
    <NuxtLink :to="switchTo('lv')" :replace class="header-locales__item" style="text-decoration: none">
      <img src="/images/flags/lv.svg" alt="Latvian" />
    </NuxtLink>
    <NuxtLink :to="switchTo('lt')" :replace class="header-locales__item" style="text-decoration: none">
      <img src="/images/flags/lt.svg" alt="Lithuanian" />
    </NuxtLink>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();

const switchTo = (loc) => ({
  path: switchLocalePath(loc).split("?")[0] || "/",
  query: {},
});
</script>
