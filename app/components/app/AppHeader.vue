<template>
  <header class="header container">
    <div class="row align-items-center">
      <div class="col-3 d-flex d-lg-none align-items-center">
        <div class="header-mobile__btn" @click="open">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <NuxtLink @click="close" :to="$localePath('/')">
          <img src="/images/logo.png" alt="" class="header-logo" />
        </NuxtLink>
      </div>

      <div class="col-3 d-flex d-lg-none"></div>
      <div class="d-none d-lg-flex col-lg-6 justify-content-end header-menu">
        <AppMenu />
      </div>
      <div class="col-lg-3 d-lg-flex d-none">
        <SearchProducts />
        <AppLocale />
      </div>
    </div>
  </header>

  <AppMobileMenu @close="close" :opened="mobileMenuOpened" />
</template>

<script setup>
const mobileMenuOpened = ref(false);

function open() {
  mobileMenuOpened.value = true;
}

function close() {
  mobileMenuOpened.value = false;
}
</script>
