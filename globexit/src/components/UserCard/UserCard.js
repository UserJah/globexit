import React, { useState } from "react";
import Modal from "../Modal/Modal";
import './UserCard.css';

function UserCard({userCardData}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
      setIsOpen(false);
  };

  return (
    <>
      <div className="userCard" onClick={handleClick}>
        <h3 className="userCard__title">{userCardData.name}</h3>
        <div className="userCard__group">
          <img src="img/smartphone.png" alt='phone' />
          <span className="userCard__text userCard__phone">{userCardData.phone}</span>
        </div>
        <div className="userCard__group">
          <img src="img/email.png" alt='phone' />
          <span className="userCard__text userCard__email">{userCardData.email}</span>
        </div>
      </div>
      {isOpen ? <Modal userCardData={userCardData} closeModal={closeModal}/> : null}
    </>
  )
};

export default UserCard