import Cookies from 'js-cookie';

const USER_COOKIE_KEY = 'uc';

const useCookieStorage = () => {
  const getStoredUserCookie = () => {
    const storedUser = Cookies.get(USER_COOKIE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const setStoredUserCookie = (user) => {
    Cookies.set(USER_COOKIE_KEY, JSON.stringify(user));
  };

  const clearStoredUserCookie = () => {
    Cookies.remove(USER_COOKIE_KEY);
  };

  return [
    getStoredUserCookie,
    setStoredUserCookie,
    clearStoredUserCookie,
  ];
};

export default useCookieStorage;
