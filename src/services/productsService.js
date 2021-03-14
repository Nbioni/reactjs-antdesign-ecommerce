import React from 'react'
import api from '../api/crudcrud';
import {getFavoritesByUserId} from './favoritesService';
import {getProducts as getProductsFakeStore} from './fakestoreService';

export async function getProducts(userId, storeKey) {
  switch(storeKey){
    case "OtherApi":

    default:
      const products = await getProductsFakeStore();
      const favoriteProducts = await getFavoritesByUserId(userId, "FakeStore");
      products.map(product => {
        let favorite = favoriteProducts.find(x=>x.idProduct == product.id);
        if(favorite){
          product.favoriteId = favorite._id;
        }
      })
      return products;
  }
}
