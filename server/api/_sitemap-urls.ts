import axios from "axios";

//server/api/_sitemap-urls.ts
export default defineEventHandler(async (e) => {
  try {
    console.log("SITEMAP");
    const products = await axios.get(`${process.env.STRAPI_URL}/tovaries`);
    if (!products || !products.data) {
      return [];
    }

    return products.data.map((product: any) => {
      return {
        loc: `/products/${product.id}`,
        lastmod: new Date(),
      };
    });
  } catch (error) {
    console.log(error);
  }
});
