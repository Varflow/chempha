export const useLocale = () => {
  const { locale } = useI18n();

  const localesToApi = {
    en: "en",
    ee: "et-EE",
  };

  return {
    locale: computed(() => localesToApi[locale.value] || "en"),
  };
};
