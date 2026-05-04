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
    <!-- <swiper-slide>
      <div class="main-banner">
        <img
          src="/images/banners/main/banner-3.jpg"
          alt="Banner 1"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          {{
            $t(
              "Convergence of experience, science and nature in cosmetic ingredients"
            )
          }}
        </h2>
        <h3 class="main-banner__subtitle">
          {{
            $t(
              "We bring you only the latest and most advanced ingredients for yourcosmetic and personal care applications"
            )
          }}
        </h3>
        <div class="main-banner__actions">
          <NuxtLink
            :to="$localePath('/products')"
            class="link-without-decoration"
          >
            <AppButton variant="white">
              {{ $t("Explore products") }}
            </AppButton>
          </NuxtLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="main-banner">
        <img
          src="/images/banners/main/banner-2.jpg"
          alt="Banner-2"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          {{ $t("Providing unique cosmetic specialties") }}
        </h2>

        <div class="main-banner__actions">
          <NuxtLink
            :to="$localePath('/products')"
            class="link-without-decoration"
          >
            <AppButton variant="white">{{ $t("Explore products") }}</AppButton>
          </NuxtLink>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="main-banner">
        <img
          src="/images/banners/main/banner-1.jpg"
          alt="Banner-3"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          {{ $t("High performance and sustainable ingredients") }}
        </h2>

        <div class="main-banner__actions">
          <NuxtLink
            :to="$localePath('/products')"
            class="link-without-decoration"
          >
            <AppButton variant="white">{{ $t("Explore products") }}</AppButton>
          </NuxtLink>
        </div>
      </div>
    </swiper-slide> -->

    <!-- Test Banners -->
    <swiper-slide v-for="(banner, index) in renderBanners" :key="index">
      <div class="main-banner">
        <img
          :src="banner.image"
          :alt="`Banner-${index + 1}`"
          class="main-banner__image"
        />
        <h2 class="main-banner__title">
          {{ $t("High performance and sustainable ingredients") }}
        </h2>

        <div class="main-banner__actions">
          <NuxtLink
            :to="$localePath('/products')"
            class="link-without-decoration"
          >
            <AppButton variant="white">{{ $t("Explore products") }}</AppButton>
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
    const prereleaseBanners = new Array(6).fill(0).map((_, index) => ({
      image: `/images/banners/main/test/main-banner-0-${(index + 1) * 10}.jpg`,
    }));
    const banners = new Array(29).fill(0).map((_, index) => ({
      image: `/images/banners/main/test/main-banner-${index + 1}.jpg`,
    }));

    const renderBanners = [
      ...prereleaseBanners,
      ...banners,
    ];

    console.log("Render Banners:", renderBanners);


    return { modules, renderBanners };
  },
};
</script>
