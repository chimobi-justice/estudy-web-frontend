const Truncate = (str, max = 40) => {
  return str.length > max ? str.slice(0, max) + '...' : str;
};

export default Truncate;