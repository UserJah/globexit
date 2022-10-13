import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import UserCardList from '../components/UserCardList';
import { getAllUsersData } from '../services/api';

function Main() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    return async () => {
      setUserData(await getAllUsersData())
    }
  }, []);

  const updateData = (data) => {
    setUserData(data);
  }

  return (
    <>
      <SearchBar updateData={updateData} />
      <UserCardList userData={userData} />
    </>
  )
}

export default Main;