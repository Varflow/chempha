<template>
  <NuxtLink :to="$localePath('/company')" class="header-menu__link"
    >Company</NuxtLink
  >
  <div class="header-menu__link" v-if="ingredientsForView">
    <NuxtLink :to="$localePath('/ingredients')">
      <div class="header-menu__link-label">
        Ingredients
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path
            d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
          />
        </svg>
      </div>
    </NuxtLink>
    <div class="header-menu-dropdown header-menu-categories">
      <div class="header-menu__link" v-for="category of ingredientsForView">
        <NuxtLink
          :to="$localePath(`/ingredients/${category.id}`)"
          class="header-menu__link-label"
          v-if="category.children"
        >
          {{ category.name }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink v-else :to="$localePath(`/category/${category.id}`)">
          {{ category.name }}
        </NuxtLink>
        <div
          class="header-menu-dropdown header-menu-subcategories"
          v-if="category.children"
        >
          <NuxtLink
            v-for="subcategory of category.children"
            :to="$localePath(`/subcategory/${subcategory.id}`)"
            class="header-menu__link"
          >
            {{ subcategory.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="header-menu__link" v-if="applicationsForView">
    <NuxtLink :to="$localePath('/applications')">
      <div class="header-menu__link-label">
        Applications
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path
            d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
          />
        </svg>
      </div>
    </NuxtLink>
    <div class="header-menu-dropdown header-menu-categories">
      <div class="header-menu__link" v-for="category of applicationsForView">
        <NuxtLink
          :to="$localePath(`/applications/${category.id}`)"
          class="header-menu__link-label"
          v-if="category.children"
        >
          {{ category.name }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink v-else :to="$localePath(`/category/${category.id}`)">
          {{ category.name }}
        </NuxtLink>
        <div
          class="header-menu-dropdown header-menu-subcategories"
          v-if="category.children"
        >
          <NuxtLink
            v-for="subcategory of category.children"
            :to="$localePath(`/subcategory/${subcategory.id}`)"
            class="header-menu__link"
          >
            {{ subcategory.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <NuxtLink :to="$localePath('/partners')" class="header-menu__link"
    >Partners</NuxtLink
  >
  <NuxtLink :to="$localePath('/news')" class="header-menu__link">News</NuxtLink>
  <NuxtLink :to="$localePath('/contact-us')" class="header-menu__link"
    >Contact Us</NuxtLink
  >
</template>

<script setup>
const { toView, getApplicationCategories, getIngredientsCategories } =
  await useCategoriesList();

const ingredientsForView = toView(getIngredientsCategories());
const applicationsForView = toView(getApplicationCategories());
</script>
