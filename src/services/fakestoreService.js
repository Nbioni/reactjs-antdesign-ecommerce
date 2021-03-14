import React from 'react'
import api from '../api/fakestore';

export async function getProducts() {
  const response = await api.get('/products')
  .then(response => response.data);
  return response;
}

export async function getCategories(){
  const response = await api.get('/products/categories')
  .then(response => response.data);
  return response;
}

export async function getProductsByCategory(category){
  const response = await api.get('/products/category/'+category)
  .then(response => response.data);
  return response;
}