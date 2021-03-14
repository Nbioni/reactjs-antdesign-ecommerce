import React from 'react'
import api from '../api/crudcrud';

export async function postFavorites(userId, storeKey, product) {
  if(product.favoriteId){
    return await api.delete('/favorites/'+product.favoriteId).then(response => response.data);
  }else{
    return await api.post('/favorites', {
      idProduct: product.id, 
      idUser: userId,
      storeName: storeKey,
      category: product.category, 
      title: product.title, 
      description: product.description, 
      price: product.price, 
      image: product.image
    }).then(response => response.data);
  }
  
}

export async function getFavorites() {
  const response = await api.get("/favorites").then(response => response.data);
  return response.map((favorite) => {
    favorite.favoriteId = favorite._id;
    return favorite;
  });
}

export async function getFavoritesByUserId(userId, storeKey) {
  const response = await getFavorites();
  if(storeKey){
    return response.filter(favorites => favorites.idUser === userId && favorites.storeName == storeKey);
  }else{
    return response.filter(favorites => favorites.idUser === userId);
  }
}