export default defineNuxtPlugin(async () => {
  const { checkAdmin, JWT_KEY, FLAG_KEY } = useAdminAuth();
  await checkAdmin();

  window.addEventListener("storage", (event) => {
    if (event.key === null || event.key === JWT_KEY || event.key === FLAG_KEY) {
      checkAdmin();
    }
  });
});
