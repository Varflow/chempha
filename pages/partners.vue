<template>
  <div class="partners-page">
    <Head>
      <Title>Chempha Partners</Title>
      <Meta name="og:title" content="Chempha Partners" />
    </Head>
    <div class="container">
      <AppPageBanner img="/images/banners/partner.jpg" title="Partners" />

      <div class="section-header">
        <h2 class="section-title">Our partners</h2>
      </div>
      <div class="row partners-list gy-5">
        <a
          class="col-12 col-lg-4 partner-item"
          v-for="partner of partnersForView"
          :href="partner.link"
          target="_blank"
        >
          <img :src="partner.logo" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    try {
      const media = useStrapiMedia();
      const { find } = useStrapi();

      const partners = await find("partneries", {
        populate: "*",
      });

      const partnersForView = partners.data.map((partner) => {
        console.log(
          `${media}${partner.attributes.logo.data[0]?.attributes.url}`
        );
        return {
          ...partner.attributes,
          logo: `${media}${partner.attributes.logo.data?.attributes.url}`,
        };
      });

      return { partnersForView };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
