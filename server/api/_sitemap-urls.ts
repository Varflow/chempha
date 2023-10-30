//server/api/_sitemap-urls.ts

import axios from "axios";

export default defineEventHandler(async (e) => {
  try {
    console.log("SITEMAP", process.env.STRAPI_URL);

    const { data: responseProducts } = await axios(
      `http://188.34.180.169/dashboard/api/tovaries`,
      { method: "GET" }
    );
    const { data: responsePosts } = await axios(
      `http://188.34.180.169/dashboard/api/novostis`,
      { method: "GET" }
    );
    const { data: responseCategories } = await axios(
      `http://188.34.180.169/dashboard/api/categories`,
      { method: "GET" }
    );
    const { data: responseSubCategories } = await axios(
      `http://188.34.180.169/dashboard/api/pod-kategoriyas`,
      { method: "GET" }
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

    const subcategoriesUrl = responseSubCategories.data.map((category: any) => {
      return {
        loc: `/subcategory/${category.id}`,
        lastmod: new Date(),
      };
    });

    return [
      ...productUrls,
      ...postsUrls,
      ...categoriesUrl,
      ...subcategoriesUrl,
    ];
  } catch (error) {
    console.log(error);
  }
});
