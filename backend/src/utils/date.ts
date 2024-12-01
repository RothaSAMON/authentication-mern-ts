// export const oneYearFromNow = () =>
//   new Date(Date.now() * 365 * 24 * 60 * 60 * 1000);

// export const thirtyDaysFromNow = () =>
//   new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

// export const fifteenMinutesFromNow = () =>
//   new Date(Date.now() + 15 * 60 * 1000);

export const oneYearFromNow = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1); // Add 1 year
  return date;
};

export const thirtyDaysFromNow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30); // Add 30 days
  return date;
};

export const fifteenMinutesFromNow = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 15); // Add 15 minutes
  return date;
};
