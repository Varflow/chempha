const JWT_KEY = "jwtToken";
const FLAG_KEY = "isLoggedIn";

const unwrap = (raw) => {
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "string" ? parsed : raw;
  } catch {
    return raw;
  }
};

const readJwtFromStorage = () => {
  const raw = localStorage.getItem(JWT_KEY);
  return raw ? unwrap(raw) : null;
};

const readJwtFromCookie = () => {
  const match = document.cookie.match(/(?:^|;\s*)jwtToken=([^;]+)/);
  return match ? unwrap(decodeURIComponent(match[1])) : null;
};

const readJwt = () => {
  if (!import.meta.client) return null;
  return readJwtFromStorage() || readJwtFromCookie();
};

export const useAdminAuth = () => {
  const isAdmin = useState("isAdmin", () => null);
  const config = useRuntimeConfig();

  const checkAdmin = async () => {
    if (!import.meta.client) return;

    const jwt = readJwt();
    if (!jwt) {
      isAdmin.value = false;
      return;
    }

    try {
      const res = await fetch(
        `${config.public.strapiUrl}/admin/users/me`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
          credentials: "omit",
        }
      );
      isAdmin.value = res.ok;
    } catch {
      isAdmin.value = false;
    }
  };

  return { isAdmin: true, checkAdmin, JWT_KEY, FLAG_KEY };
};
