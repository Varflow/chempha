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
        <div class="col-12 col-lg-4 partner-item" v-for="partner of partners">
          <img :src="partner" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const partners = [
      "/images/partners/partner-1.jpg",
      "/images/partners/partner-2.jpg",
      "/images/partners/partner-3.jpg",
      "/images/partners/partner-5.jpg",
      "/images/partners/partner-6.jpg",
      "/images/partners/partner-7.jpg",
    ];

    return {
      partners,
    };
  },
};
</script>
