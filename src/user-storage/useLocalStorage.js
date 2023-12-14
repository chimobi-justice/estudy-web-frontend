import { useState } from 'react';
const USER_ISLOGGED_IN = 'kpq';

const useLocalStorage = (defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(USER_ISLOGGED_IN);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(
          USER_ISLOGGED_IN,
          JSON.stringify(defaultValue)
        );
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(USER_ISLOGGED_IN, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

export default useLocalStorage ;
