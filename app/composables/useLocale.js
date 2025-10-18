export const useLocale = () => {
  const { locale } = useI18n();

  const localesToApi = {
    en: "en",
    ee: "et-EE",
    lv: "lv-LV",
    lt: "lt-LT",
  };

  return {
    locale: computed(() => localesToApi[locale.value] || "en"),
  };
};
