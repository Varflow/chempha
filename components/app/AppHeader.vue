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
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="" class="header-logo" />
        </NuxtLink>
      </div>
      <div class="col-3 d-flex d-lg-none"></div>
      <div class="d-none d-lg-flex col-lg-9 justify-content-end header-menu">
        <div class="header-menu__link">Company</div>
        <div class="header-menu__link">Ingredients</div>
        <div class="header-menu__link">Application</div>
        <div class="header-menu__link">Partners</div>
        <NuxtLink to="/news" class="header-menu__link">News</NuxtLink>
        <div class="header-menu__link">Contact Us</div>
      </div>
    </div>
  </header>

  <div class="header-mobile d-block d-lg-none" :class="{ active: mobileMenuOpened }">
    <div class="header-mobile__header">
      <NuxtLink to="/">
        <img src="/images/logo.png" alt="" class="header-logo" />
      </NuxtLink>
      <div class="header-mobile__btn header-mobile-close" @click="close">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <div class="header-mobile__menu">
      <div class="header-menu__link">Company</div>
      <div class="header-menu__link">Ingredients</div>
      <div class="header-menu__link">Application</div>
      <div class="header-menu__link">Partners</div>
      <NuxtLink to="/news" class="header-menu__link">News</NuxtLink>
      <div class="header-menu__link">Contact Us</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpened: false,
    };
  },

  methods: {
    open() {
      this.mobileMenuOpened = true;
    },
    close() {
      this.mobileMenuOpened = false;
    },
  },
};
</script>
