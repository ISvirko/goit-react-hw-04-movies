import queryString from "query-string";

const getQueryParams = (qs) => {
  return queryString.parse(qs);
};

export default getQueryParams;
