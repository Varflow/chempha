<!-- All categories applications -->
<template>
  <div class="category-page">
    <Head>
      <Title>{{ $t("Ingredients") }}</Title>
      <Meta name="og:title" :content="$t('Ingredients')" />
      <Meta name="og:image" content="/images/banners/ingredients.jpeg" />
    </Head>
    <div class="container">
      <AppPageBanner
        :title="$t('Ingredients')"
        img="/images/banners/ingredients.jpeg"
      />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4" v-for="category of ingredientsForView">
          <NuxtLink
            class="category-card__link"
            :to="
              $localePath(
                category.children && category.children.length
                  ? `/ingredients/${category.id}`
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
const { toView, ingredientsCategories } = await useCategoriesList();

const ingredientsForView = toView(ingredientsCategories.value);
</script>
