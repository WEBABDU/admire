export const queryBuilder = (
  url,
  { include = [], page = 1, filter = {} } = {}
) => {
  const queryObj = new URLSearchParams();
  queryObj.set("page", page);

  if (include.length) queryObj.set("include", include.join(","));
  if (Object.keys(filter).length)
    Object.entries(filter).forEach((item) => {
      if (item[0] && item[1]) queryObj.append(item[0], item[1]);
    });

  return `${url}?${decodeURIComponent(queryObj.toString())}`;
};
