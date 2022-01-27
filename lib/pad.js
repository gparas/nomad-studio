const pad = (num) => {
  if (!num) return null;
  return num < 10 ? '0' + num.toString() : num.toString();
};

export default pad;
