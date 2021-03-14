import React from 'react'
import api from '../api/crudcrud';

export async function postUser(name, email, password) {
  return await api.post('/users', {
      name: name,
      email: email,
      password: password
  }).then(response => response.data);
}

export async function getUsers() {
  return await api.get("/users").then(response => response.data);
}

export async function getUser(email, password) {
  const response = await api.get("/users").then(response => response.data);
  return response.find(user => user.email === email && user.password === password);
}