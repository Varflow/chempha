<!-- All categories applications -->
<template>
  <div class="category-page">
    <Head>
      <Title>{{ $t("Indredients") }}</Title>
      <Meta name="og:title" :content="$t('Indredients')" />
      <Meta name="og:image" content="/images/banners/application.jpg" />
    </Head>
    <div class="container">
      <AppPageBanner
        :title="$t('Applications')"
        img="/images/banners/application.jpg"
      />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4" v-for="category of ingredientsForView">
          <NuxtLink
            class="category-card__link"
            :to="
              $localePath(
                category.children && category.children.length
                  ? `/applications/${category.id}`
                  : `/category/${category.id}`
              )
            "
          >
            <CategoryCard
              :name="category.name"
              :image="category.image ? `${media}${category.image}` : null"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const media = useStrapiMedia();
const { toView, applicationCategories } = await useCategoriesList();

const ingredientsForView = toView(applicationCategories.value);
</script>
