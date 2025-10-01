export const usePartnersList = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const media = useStrapiMedia();

  const dataKey = computed(() => `partners-${locale.value}`);

  const { data: partners } = await useAsyncData(dataKey, () =>
    find("partneries", {
      populate: {
        logo: true,
      },
      locale: locale.value,
    })
  );

  const partnersForView = computed(() => {
    const list =
      partners.value?.data?.map((partner) => ({
        ...partner,
        logo: `${media}${partner.logo?.url}`,
      })) || [];

    const unique = Array.from(
      new Map(list.map((item) => [item.link, item])).values()
    );

    return unique;
  });

  return {
    partnersForView,
  };
};
