<template>
  <NuxtLink to="/company" class="header-menu__link">Company</NuxtLink>
  <div class="header-menu__link" v-if="ingredientsForView">
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
    <div class="header-menu-dropdown header-menu-categories">
      <div class="header-menu__link" v-for="category of ingredientsForView">
        <div class="header-menu__link-label">
          {{ category.name }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
            v-if="category.children"
          >
            <path
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
        </div>
        <div class="header-menu-dropdown header-menu-subcategories" v-if="category.children">
          <NuxtLink
            v-for="subcategory of category.children"
            :to="`/category/${subcategory.id}`"
            class="header-menu__link"
          >
            {{ subcategory.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="header-menu__link">Application</div>
  <NuxtLink to="/partners" class="header-menu__link">Partners</NuxtLink>
  <NuxtLink to="/news" class="header-menu__link">News</NuxtLink>
  <NuxtLink to="/contact-us" class="header-menu__link">Contact Us</NuxtLink>
</template>

<script>
const toView = (collection) => {
  if (!collection) {
    return [];
  }

  return collection.map((collection) => {
    return {
      name: collection.attributes.Name,
      children: !collection.attributes.pod_kategoriyas?.data.length
        ? null
        : collection.attributes.pod_kategoriyas?.data.map((subcategory) => {
            return {
              id: subcategory.id,
              name: subcategory.attributes.name,
            };
          }),
    };
  });
};

export default {
  async setup() {
    try {
      const { find } = useStrapi();
      const categories = await find('categories', { populate: '*' });

      const ingredients = categories.data.filter(
        (category) => category.attributes.section === 'ingredients',
      );
      const applications = categories.data.filter(
        (category) => category.attributes.section === 'applications',
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
};
</script>
