import { API_SERVER } from "./constants";

const { BASE_URL, PATH } = API_SERVER;

const productListUrl = `${BASE_URL}${PATH.PRODUCT_LIST}`;
const productDetailUrl = (id) => `${BASE_URL}${PATH.PRODUCT_LIST}/${id}`;
const cartUrl = `${BASE_URL}${PATH.CART}`;

export const fetchData = async (requestUrl = "") => {
  const response = await fetch(requestUrl);
  if (!response.ok) throw new Error("fetch error");

  const data = await response.json();
  if (!data) throw new Error("No Data");

  return data;
};

export const postData = async (requestUrl = "", requestData = {}) => {
  const response = await fetch(requestUrl, {
    method: "POST",
    body: JSON.stringify(requestData),
  });
  if (!response.ok) throw new Error("fetch error");

  const data = await response.json();
  if (!data) throw new Error("No Data");

  return data;
};

export const deleteData = async (requestUrl = "", requestData = {}) => {
  const response = await fetch(requestUrl, {
    method: "DELETE",
    body: JSON.stringify(requestData),
  });
  if (!response.ok) throw new Error("fetch error");

  const data = await response.json();
  if (!data) throw new Error("No Data");

  return data;
};

export const fetchProductList = () => fetchData(productListUrl);
export const fetchProductDetail = (id) => fetchData(productDetailUrl(id));
export const fetchCartItemList = () => fetchData(cartUrl);

export const requestPostCartItem = (productIdList) =>
  postData(cartUrl, { productIdList });

export const requestDeleteCartItem = (productIdList) =>
  deleteData(cartUrl, { productIdList });
