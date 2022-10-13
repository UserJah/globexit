import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 1000,
});

export const getAllUsersData = async () => {
  const response = axiosInstance.get();
  const UserList = (await response).data;

  return UserList;
};

export const getFilteredUsersData = async (searchValue) => {
  const response = axiosInstance.get(`?term=${searchValue}`);
  const UserList = (await response).data;
  
  return UserList;
}
