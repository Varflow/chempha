const JWT_KEY = "jwtToken";
const FLAG_KEY = "isLoggedIn";

const readJwt = () => {
  if (!import.meta.client) return null;
  const raw = localStorage.getItem(JWT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "string" ? parsed : raw;
  } catch {
    return raw;
  }
};

export const useAdminAuth = () => {
  const isAdmin = useState("isAdmin", () => null);
  const config = useRuntimeConfig();

  const checkAdmin = async () => {
    if (!import.meta.client) return;

    const jwt = readJwt();
    const init = jwt
      ? { headers: { Authorization: `Bearer ${jwt}` }, credentials: "omit" }
      : { credentials: "include" };

    try {
      const res = await fetch(
        `${config.public.strapiUrl}/admin/users/me`,
        init
      );
      isAdmin.value = res.ok;
    } catch {
      isAdmin.value = false;
    }
  };

  return { isAdmin, checkAdmin, JWT_KEY, FLAG_KEY };
};
