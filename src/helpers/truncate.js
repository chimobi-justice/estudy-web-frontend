const Truncate = (str, max = 40) => {
  return str.length > 100 && str.slice(0, max) + '...';
}

export default Truncate;