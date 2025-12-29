<template>
  <div class="news-page">
    <Head>
      <Title>{{ $t("Chempha News") }}</Title>
      <Meta name="og:title" content="Chempha News" />
    </Head>
    <div class="container">
      <AppPageBanner :title="$t('News')" />
      <div class="posts-list-container">
        <PostList />
      </div>
    </div>
  </div>
</template>
