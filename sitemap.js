const { default: axios } = require("axios");
const { writeFile } = require("fs");
const { resolve } = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const getDynamicLinks = async () => {
  const { data: responseProducts } = await axios(
    `https://chempha.com/dashboard/api/tovaries`
  );
  const { data: responsePosts } = await axios(
    `https://chempha.com/dashboard/api/novostis`
  );
  const { data: responseCategories } = await axios(
    `https://chempha.com/dashboard/api/categories`
  );
  const { data: responseSubCategories } = await axios(
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

  const productUrls = responseProducts.data.map((product) => {
    return {
      loc: `/products/${product.id}`,
      lastmod: new Date(),
    };
  });

  const postsUrls = responsePosts.data.map((post) => {
    return {
      loc: `/posts/${post.id}`,
      lastmod: new Date(),
    };
  });

  const categoriesUrl = responseCategories.data.map((category) => {
    const section =
      category.attributes.section === "ingredients"
        ? "ingredients"
        : "applications";
    return {
      loc: `/${section}/${category.id}`,
      lastmod: new Date(),
    };
  });

  const subcategoriesUrl = responseSubCategories.data.map((category) => {
    return {
      url: `/subcategory/${category.id}`,
      changefreq: "daily",
      priority: 1,
    };
  });

  return [...productUrls, ...postsUrls, ...categoriesUrl, ...subcategoriesUrl];
};

const start = async () => {
  const links = await getDynamicLinks();
  const stream = new SitemapStream({ hostname: "https://chempha.com" });

  // Return a promise that resolves with your XML string
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    writeFile(resolve(__dirname, "sitemap.xml"), data, () => {})
  );
};

start();
