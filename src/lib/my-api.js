import axios from "axios";
export const getProducts = () => {
  return axios
    .get(
      "https://backend-final-g1-955g.onrender.com/api/products/list?page=1&pageSize=9"
    )
    .then((response) => response.data);
};

export const getProduct = (productId) => {
  return axios
    .get(`https://backend-final-g1-955g.onrender.com/api/products/${productId}`)
    .then((res) => res.data);
};

export const getProductsByCate = (category) => {
  return axios.get(
    `https://backend-final-g1-955g.onrender.com/api/products/list?page=1&pageSize=9&categories=${category}`
  );
};
