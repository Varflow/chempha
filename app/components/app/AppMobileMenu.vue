<template>
  <div class="header-mobile d-block d-lg-none" :class="{ active: opened }">
    <div class="header-mobile__header">
      <NuxtLink @click="$emit('close')" :to="$localePath('/')">
        <img src="/images/logo.png" alt="" class="header-logo" />
      </NuxtLink>
      <div
        class="header-mobile__btn header-mobile-close"
        @click="$emit('close')"
      >
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <div class="header-mobiler__search">
      <SearchProducts @search="$emit('close')" />
    </div>

    <div class="header-mobile__menu">
      <NuxtLink
        @click="$emit('close')"
        :to="$localePath('/company')"
        class="header-menu__link"
      >
        {{ $t("Company") }}
      </NuxtLink>
      <div class="header-menu__link">
        <div
          class="header-menu__link-label"
          @click="toggleCategory('ingredients')"
        >
          {{ $t("Ingredients") }}
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
        <div
          class="header-menu-dropdown header-menu-categories"
          :class="{ active: nameCategoryOpened === 'ingredients' }"
        >
          <div class="header-menu__link" v-for="category of ingredientsForView">
            <div
              class="header-menu__link-label"
              @click="toggleSubCategory(category.name)"
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
            </div>

            <NuxtLink
              v-else
              :to="$localePath(`/category/${category.id}`)"
              @click="$emit('close')"
            >
              {{ category.name }}
            </NuxtLink>

            <div
              class="header-menu-dropdown header-menu-subcategories"
              :class="{ active: nameSubCategoryOpened === category.name }"
              v-if="category.children"
            >
              <NuxtLink
                v-for="subcategory of category.children"
                :to="$localePath(`/subcategory/${subcategory.id}`)"
                class="header-menu__link"
                @click="$emit('close')"
              >
                {{ subcategory.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="header-menu__link">
        <div
          class="header-menu__link-label"
          @click="toggleCategory('applications')"
        >
          {{ $t("Applications") }}
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
        <div
          class="header-menu-dropdown header-menu-categories"
          :class="{ active: nameCategoryOpened === 'applications' }"
        >
          <div
            class="header-menu__link"
            v-for="category of applicationsForView"
          >
            <div
              class="header-menu__link-label"
              @click="toggleSubCategory(category.name)"
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
            </div>

            <NuxtLink
              v-else
              :to="$localePath(`/category/${category.id}`)"
              @click="$emit('close')"
            >
              {{ category.name }}
            </NuxtLink>

            <div
              class="header-menu-dropdown header-menu-subcategories"
              :class="{ active: nameSubCategoryOpened === category.name }"
              v-if="category.children"
            >
              <NuxtLink
                v-for="subcategory of category.children"
                :to="$localePath(`/subcategory/${subcategory.id}`)"
                class="header-menu__link"
                @click="$emit('close')"
              >
                {{ subcategory.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink
        @click="$emit('close')"
        :to="$localePath('/partners')"
        class="header-menu__link"
      >
        {{ $t("Partners") }}
      </NuxtLink>
      <NuxtLink
        @click="$emit('close')"
        :to="$localePath('/news')"
        class="header-menu__link"
      >
        {{ $t("News") }}
      </NuxtLink>
      <NuxtLink
        @click="$emit('close')"
        :to="$localePath('/contact-us')"
        class="header-menu__link"
      >
        {{ $t("Contact Us") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
const toView = (collection) => {
  if (!collection) {
    return [];
  }

  return collection.map((collection) => {
    return {
      id: collection.documentId,
      name: collection.Name,
      children: !collection.pod_kategoriyas
        ? null
        : collection.pod_kategoriyas?.map((subcategory) => {
            return {
              id: subcategory.documentId,
              name: subcategory.name,
            };
          }),
    };
  });
};

export default {
  emits: ["close"],
  props: ["opened"],

  data() {
    return {
      nameCategoryOpened: null,
      nameSubCategoryOpened: null,
    };
  },

  async setup() {
    try {
      const { find } = useStrapi();
      const categories = await find("categories", {
        populate: { image: true, pod_kategoriyas: true },
      });

      const ingredients = categories.data.filter(
        (category) => category.section === "ingredients"
      );
      const applications = categories.data.filter(
        (category) => category.section === "application"
      );

      const ingredientsForView = toView(ingredients);
      const applicationsForView = toView(applications);

      return {
        ingredientsForView,
        applicationsForView,
      };
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    toggleCategory(category) {
      if (this.nameCategoryOpened) {
        this.nameCategoryOpened = null;
      } else {
        this.nameCategoryOpened = category;
      }
    },

    toggleSubCategory(category) {
      if (this.nameSubCategoryOpened) {
        this.nameSubCategoryOpened = null;
      } else {
        this.nameSubCategoryOpened = category;
      }
    },
  },
};
</script>
