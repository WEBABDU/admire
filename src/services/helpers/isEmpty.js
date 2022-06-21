export const isEmpty = (value) => {
  if (value) return false;
  if (typeof value === "object" && (value.length || Object.keys(value).length))
    return false;

  return true;
};
