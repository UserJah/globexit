import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import UserCardList from '../components/UserCardList/UserCardList';
import { getAllUsersData } from '../services/api';
import './Main.css'

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
    <div className='mainPage'>
      <SearchBar updateData={updateData} />
      <UserCardList userData={userData} />
    </div>
  )
}

export default Main;