<template>
  <footer class="footer container">
    <div class="row gy-5">
      <div class="col-lg-4">
        <h4 class="footer-col__title">{{ $t("Contact us") }}</h4>
        <div class="footer-col__list">
          <div class="footer-col__item">Chempha OÜ</div>
          <div class="footer-col__item">Narva mnt 7-634</div>
          <div class="footer-col__item">10117 Tallinn, Estonia</div>
          <a href="tel:+372 634 6390" class="footer-col__item"
            >Tel. +372 634 6390</a
          >
          <a href="mailto:info@chempha.com" class="footer-col__item"
            >info@chempha.com</a
          >

          <div class="footer-socials">
            <NuxtLink
              to="https://www.instagram.com/chemphacosm"
              target="_blank"
              class="footer-socials-item"
            >
              <img src="/images/icons/instagram.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/company/chempha-o%C3%BC"
              target="_blank"
              class="footer-socials-item"
            >
              <img src="/images/icons/linkiedin.svg" alt="" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <h4 class="footer-col__title">{{ $t("Ingredients") }}</h4>
        <div class="footer-col__list">
          <NuxtLink
            :to="
              $localePath(
                Boolean(category.children?.length)
                  ? `/ingredients/${category.id}`
                  : `/category/${category.id}`
              )
            "
            class="footer-col__item"
            v-for="category of ingredientsForView"
            >{{ category.name }}</NuxtLink
          >
        </div>
      </div>

      <div class="col-lg-4">
        <h4 class="footer-col__title">{{ $t("Application products") }}</h4>
        <div class="footer-col__list">
          <NuxtLink
            :to="
              $localePath(
                Boolean(category.children?.length)
                  ? `/applications/${category.id}`
                  : `/category/${category.id}`
              )
            "
            class="footer-col__item"
            v-for="category of applicationsForView"
            >{{ category.name }}</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      Chempha © {{ $t("Copyright") }} {{ year }} -
      {{ $t("All rights reserved") }}
    </div>
  </footer>
</template>

<script setup>
const { toView, applicationCategories, ingredientsCategories } =
  await useCategoriesList();

const year = new Date().getFullYear();

const applicationsForView = computed(() => toView(applicationCategories.value));
const ingredientsForView = computed(() => toView(ingredientsCategories.value));
</script>
