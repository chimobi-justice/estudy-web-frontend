import Cookies from 'js-cookie';

const USER_COOKIE_KEY = 'kci';

const useCookieStorage = () => {
  const getStoredUser = () => {
    const storedUser = Cookies.get(USER_COOKIE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const setStoredUser = (user) => {
    Cookies.set(USER_COOKIE_KEY, JSON.stringify(user));
  };

  const clearStoredUser = () => {
    Cookies.remove(USER_COOKIE_KEY);
  };

  return {
    getStoredUser,
    setStoredUser,
    clearStoredUser,
  };
};

export default useCookieStorage;
