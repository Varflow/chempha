<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :speed="1200"
    :delay="4000"
    :autoplay="true"
    class="main-slider"
    navigation
    pagination
  >
    <swiper-slide>
      <div class="main-banner">
        <img
          src="/images/banners/main/banner-3.webp"
          alt="Banner 1"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          Convergence of experience, science and nature in cosmetic ingredients
        </h2>
        <h3 class="main-banner__subtitle">
          We bring you only the latest and most advanced ingredients for your
          cosmetic and personal care applications
        </h3>
        <div class="main-banner__actions">
          <NuxtLink to="/products" class="link-without-decoration">
            <AppButton variant="white"> Explore products </AppButton>
          </NuxtLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="main-banner">
        <img
          src="/images/banners/main/banner-2.webp"
          alt="Banner-2"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          Providing unique cosmetic specialties
        </h2>

        <div class="main-banner__actions">
          <NuxtLink to="/products" class="link-without-decoration">
            <AppButton variant="white"> Explore products </AppButton>
          </NuxtLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="main-banner">
        <img
          src="/images/banners/main/banner-1.webp"
          alt="Banner-3"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          High performance and sustainable ingredients
        </h2>

        <div class="main-banner__actions">
          <NuxtLink to="/products" class="link-without-decoration">
            <AppButton variant="white"> Explore products </AppButton>
          </NuxtLink>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const modules = [Pagination, Navigation, Autoplay];

    return { modules };
  },
};
</script>
