// src/services/productService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'api/products';

const api = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Create a new product
function createProduct(product,image) {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('product', JSON.stringify(product));

    console.log("formdata",formData);
    return api.post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}

// Get a single product by ID
function getProduct(id) {
  return api.get(`/${id}`);
}

// Update a product by ID
function updateProduct(id, product) {
  return api.put(`/${id}`, product);
}

// Delete a product by ID
function deleteProduct(id) {
  return api.delete(`/${id}`);
}

// Get all products with pagination
function getAllProducts() {
  return api.get('/');
}

const productService = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};

export default productService;