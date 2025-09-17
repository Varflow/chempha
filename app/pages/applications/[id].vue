<!-- All categories applications -->
<template>
  <div class="category-page">
    <Head>
      <Title> {{ title }}</Title>
      <Meta name="og:title" :content="`${title}`" />
      <Meta name="og:image" :content="bannerImage" />
    </Head>
    <div class="container">
      <AppPageBanner :title="title" :img="bannerImage" />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4" v-for="subcategory of subcategories">
          <NuxtLink
            :to="$localePath(`/subcategory/${subcategory.id}`)"
            class="category-card__link"
          >
            <CategoryCard
              :name="subcategory.name"
              :image="subcategory.image ? `${media}${subcategory.image}` : null"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const media = useStrapiMedia();

const { category, subcategories } = await useCategoryShow();

const title = computed(() => category.value.data.Name);
const categoryBanner = computed(() => category.value.data.image);
const bannerImage = computed(() => `${media}${categoryBanner.value?.url}`);
</script>
