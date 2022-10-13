import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import UserCard from '../UserCard/UserCard';
import './UserCardList.css';

function UserCardList({userData}) {
  return (
    <div className={'userCardList'}>
      {userData.map((userCardData, index) => {
        return (
          <UserCard key={index} userCardData={userCardData} />
        )
      })};
    </div>
  );
};

export default UserCardList;
