export const usePartnersList = async () => {
  const { find } = useStrapi();
  const media = useStrapiMedia();

  const { data: partners } = await useAsyncData("partners", () =>
    find("partneries", {
      populate: {
        logo: true,
      },
    })
  );

  const partnersForView = computed(
    () =>
      partners.value.data?.map((partner) => ({
        ...partner,
        logo: `${media}${partner.logo?.url}`,
      })) || []
  );

  return {
    partnersForView,
  };
};
