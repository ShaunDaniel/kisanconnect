import axios from 'axios';
import { background, useToast } from '@chakra-ui/react';
const API_URL = import.meta.env.VITE_API_URL + 'api/users';

const api = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


function registerUser(user) {
  return api.post(`${API_URL}/register`, user);
}

function getUser(id) {
  return api.get(`${API_URL}/${id}`);
}

function loginUser(credentials,toast) {
  return checkUser(credentials.email).then(response => {
    if (response.data.exists) {
        return api.post(`${API_URL}/login`, { email: credentials.email, password: credentials.password }).then(response => {
          return response;
      }).catch(error => {
        toast({
          description: 'Please check your credentials',
          status: "error",
          duration: 5000,
          isClosable: true,})
      }
      );
    } else {
      toast({
        description: 'Email doesn\'t exist', 
        status: "error",
        duration: 5000,
        isClosable: true,})
    } 
  });
}



function logoutUser() {
  return api.get(`${API_URL}/logout`,{withCredentials:true});
}

function updateUser(id, user) {
  // console.log("inside update user",user)
  // console.log("inside update user",id)
  return api.put(`${API_URL}/${id}`, user);
}

function deleteUser(id) {
  return api.delete(`${API_URL}/${id}`);
}


function checkUser(email){
  return api.post(`${API_URL}/check`,{email:email});
}


const userService = {
  registerUser,
  getUser,
  loginUser,
  logoutUser,
  deleteUser,
  updateUser,
  checkUser
};
export default userService;