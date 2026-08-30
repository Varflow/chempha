<template>
  <header class="header container">
    <div class="row align-items-center">
      <div class="col-6 col-lg-2">
        <NuxtLink @click="close" :to="$localePath('/')">
          <img src="/images/logo.png" alt="" class="header-logo" />
        </NuxtLink>
      </div>

      <div
        class="col-6 d-flex d-lg-none justify-content-end header-mobile__actions"
      >
        <AppLocale />
        <button
          type="button"
          class="header-mobile__btn"
          aria-label="Menu"
          @click="open"
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
      </div>
      <div class="d-none d-lg-flex col-lg-7 justify-content-center header-menu">
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
