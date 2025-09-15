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
          v-for="partner of partnersForView"
          :href="partner.link"
          class="col-12 col-lg-4 partner-item"
          target="_blank"
        >
          <img :src="partner.logo" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { partnersForView } = await usePartnersList();
</script>
