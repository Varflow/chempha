<template>
  <footer class="footer container">
    <div class="row gy-5">
      <div class="col-lg-4">
        <h4 class="footer-col__title">Contact us</h4>
        <div class="footer-col__list">
          <div class="footer-col__item">Chempha OÜ</div>
          <div class="footer-col__item">Narva mnt 7-634</div>
          <div class="footer-col__item">10117 Tallinn, Estonia</div>
          <a href="tel:+372 712 2708" class="footer-col__item"
            >Tel. +372 712 2708</a
          >
          <a href="mailto:info@chempha.com" class="footer-col__item"
            >info@chempha.com</a
          >
        </div>
      </div>
      <div class="col-lg-4">
        <h4 class="footer-col__title">Ingredients</h4>
        <div class="footer-col__list">
          <NuxtLink
            :to="
              Boolean(category.children?.length)
                ? `/ingredients/${category.id}`
                : `/category/${category.id}`
            "
            class="footer-col__item"
            v-for="category of ingredientsForView"
            >{{ category.name }}</NuxtLink
          >
        </div>
      </div>

      <div class="col-lg-4">
        <h4 class="footer-col__title">Application products</h4>
        <div class="footer-col__list">
          <NuxtLink
            :to="
              Boolean(category.children?.length)
                ? `/applications/${category.id}`
                : `/category/${category.id}`
            "
            class="footer-col__item"
            v-for="category of applicationsForView"
            >{{ category.name }}</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      Chempha © Copyright 2023 - All rights reserved
    </div>
  </footer>
</template>

<script>
const toView = (collection) => {
  if (!collection) {
    return [];
  }

  return collection.map((collection) => {
    return {
      id: collection.id,
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
      const categories = await find("categories", { populate: "*" });

      const ingredients = categories.data.filter(
        (category) => category.attributes.section === "ingredients"
      );
      const applications = categories.data.filter(
        (category) => category.attributes.section === "application"
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
