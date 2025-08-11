export const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
export const columnSize = (columns, index) => {
  if (columns[index]?.size) return columns[index].size;
  return columns.length > 0 ? 12 / columns.length : 12;
};
export const getImageURL = (image) => image?.url;
export const toLocaleCurrency = (amount, options = {}) =>
  amount.toLocaleString(undefined, {
    ...options,
    style: 'currency',
    currency: 'USD',
  });
export const toLocaleDate = (date, options = {}) => date.toLocaleDateString(undefined, { dateStyle: 'medium', ...options });
export const toLocaleDateTime = (date, options = {}) => date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short', ...options });
export const timeRemaining = (futureTime) => {
  const now = new Date();
  const future = new Date(futureTime);
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days}d, ${hours}h, ${minutes}m`;
};
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const debounce = (fn, wait) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};
export const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};
export const dateIsPast = (date) => new Date(date) < new Date();

export const baseCoursePath = 'courses';
export const baseInstructorPath = 'presenters';
