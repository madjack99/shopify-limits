export const apiFetchLimits = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Limits fetched');
    }, 2002);
  });
};
