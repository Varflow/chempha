<template>
  <div class="section-products" v-if="productsForView">
    <div class="container">
      <div class="section-products__header">
        <h3 class="section-title">
          We are committed to provide you with highly efficient and sustainable
          solutions that are safe for both the environment and people
        </h3>
        <div class="slider-navigation">
          <div class="slider-prev" ref="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M16.752,23.994,6.879,14.121a3,3,0,0,1,0-4.242L16.746.012,18.16,1.426,8.293,11.293a1,1,0,0,0,0,1.414l9.873,9.873Z"
                />
              </g>
            </svg>
          </div>
          <div class="slider-next" ref="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M7.412,24,6,22.588l9.881-9.881a1,1,0,0,0,0-1.414L6.017,1.431,7.431.017l9.862,9.862a3,3,0,0,1,0,4.242Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :speed="800"
      @swiper="onSwiper"
      class="products-slider"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :breakpoints="{
        1280: {
          slidesPerView: 4.1,
        },
        768: {
          slidesPerView: 3.1,
        },
      }"
    >
      <swiper-slide v-for="product of productsForView">
        <ProductCard
          :id="product.id"
          :name="product.name"
          :category="product.category"
          :image="`${media}${product.image?.url}`"
        />
      </swiper-slide>
    </swiper>

    <div class="section-products__actions">
      <NuxtLink to="/products" class="link-without-decoration">
        <AppButton variant="black"> View All Products </AppButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  async setup() {
    try {
      const modules = [Navigation];
      const prev = ref(null);
      const next = ref(null);

      const media = useStrapiMedia();
      const { find } = useStrapi();

      const products = await find("tovaries", {
        populate: "*",
        pagination: { limit: 10 },
      });

      const productsForView = products.data.map((product) => {
        return {
          id: product.id,
          image: product.attributes.image.data?.attributes,
          name: product.attributes.name,
          category: product.attributes.pod_kategoriya?.data.attributes.name,
        };
      });

      return { modules, prev, next, productsForView, media };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
