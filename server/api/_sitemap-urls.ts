import axios from "axios";

//server/api/_sitemap-urls.ts
export default cachedEventHandler(
  async (e) => {
    try {
      console.log("SITEMAP", process.env.STRAPI_URL);

      const responseProducts: any = await $fetch(
        `https://chempha.com/dashboard/api/tovaries`
      );
      const responsePosts: any = await $fetch(
        `https://chempha.com/dashboard/api/novostis`
      );
      const responseCategories: any = await $fetch(
        `https://chempha.com/dashboard/api/categories`
      );
      const responseSubCategories: any = await $fetch(
        `https://chempha.com/dashboard/api/pod-kategoriyas`
      );

      if (
        !responseProducts.data &&
        !responsePosts.data &&
        !responseCategories.data &&
        !responseSubCategories.data
      ) {
        return [];
      }

      const productUrls = responseProducts.data.map((product: any) => {
        return {
          loc: `/products/${product.id}`,
          lastmod: new Date(),
        };
      });

      const postsUrls = responsePosts.data.map((post: any) => {
        return {
          loc: `/posts/${post.id}`,
          lastmod: new Date(),
        };
      });

      const categoriesUrl = responseCategories.data.map((category: any) => {
        const section =
          category.attributes.section === "ingredients"
            ? "ingredients"
            : "applications";
        return {
          loc: `/${section}/${category.id}`,
          lastmod: new Date(),
        };
      });

      const subcategoriesUrl = responseSubCategories.data.map(
        (category: any) => {
          return {
            loc: `/subcategory/${category.id}`,
            lastmod: new Date(),
          };
        }
      );

      return [
        ...productUrls,
        ...postsUrls,
        ...categoriesUrl,
        ...subcategoriesUrl,
      ];
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  },
  {
    name: "sitemap-dynamic-url",
    maxAge: 60 * 10, // cache URLs for 10 minutes
  }
);
