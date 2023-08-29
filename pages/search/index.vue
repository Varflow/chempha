<template>
  <div class="search-page">
    <div class="container">
      <AppPageBanner title="Search result" />
      <div class="search-container--full">
        <input
          type="text"
          class="search-container__input"
          placeholder="Search..."
          v-model="searchQuery"
          v-on:keyup.enter="search"
        />
        <div class="search-container__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path
              d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
            />
          </svg>
        </div>
      </div>

      <AppLoader v-if="loading" />

      <div
        class="row products-list gy-5"
        v-if="!loading && (products.length || posts.length)"
      >
        <div class="col-12 col-lg-3" v-for="product of products">
          <ProductCard
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :image="`${media}${product.image?.url}`"
          />
        </div>

        <div class="col-lg-4 col-xl-3 gy-5" v-for="post of posts">
          <NuxtLink :to="`/posts/${post.id}`" class="link-without-decoration">
            <PostCard
              :title="post.title"
              :category="post.category"
              :createdAt="post.createdAt"
              :image="post.image"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="search-empty" v-else>
        <h1 class="search-empty__title">No search results</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      products: [],
      posts: [],
      media: null,
      loading: false,
    };
  },

  mounted() {
    const query = this.$route.query.q;
    this.searchQuery = query;

    this.search();
  },

  watch: {
    "$route.query.q": {
      handler(value) {
        this.searchQuery = value;
        this.search();
      },
    },
  },

  methods: {
    async search() {
      try {
        this.loading = true;
        const media = useStrapiMedia();
        const { find } = useStrapi();

        const products = await find("tovaries", {
          populate: "*",
          filters: {
            $or: [
              {
                name: {
                  $containsi: this.searchQuery,
                },
              },
              {
                description: {
                  $containsi: this.searchQuery,
                },
              },
              {
                excert: {
                  $containsi: this.searchQuery,
                },
              },
            ],
          },
        });

        const posts = await find("novostis", {
          populate: "*",
          filters: {
            $or: [
              {
                title: {
                  $containsi: this.searchQuery,
                },
              },
              {
                text: {
                  $containsi: this.searchQuery,
                },
              },
            ],
          },
        });

        const productsForView = products.data.map((product) => {
          return {
            ...product.attributes,
            id: product.id,
            category: product.attributes.pod_kategoriya?.data.attributes.name,
            image: product.attributes.image.data?.attributes,
          };
        });

        const postsForView = posts.data.map((post) => {
          return {
            id: post.id,
            image: `${media}${post.attributes.image.data?.attributes.url}`,
            title: post.attributes.title,
            text: post.attributes.text,
            createdAt: new Date(post.attributes.createdAt).toLocaleDateString(),
          };
        });

        this.products = productsForView;
        this.posts = postsForView;
        this.media = media;
        this.loading = false;

        this.$router.replace({ query: { q: this.searchQuery } });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
