import React from "react";
import './Modal.css';

function Modal({userCardData, closeModal}) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalContent" onClick={event => event.stopPropagation()}>
        <img className="modalContent__closeBtn" src="img/close.png" alt="close modal" onClick={closeModal} />
        <h3>{userCardData.name}</h3>
        <div className="modalContent__wrapper">
          <div className="modalContent__description">
            <span>Телефон:</span>
            <span>Почта:</span>
            <span>Дата приема:</span>
            <span>Должность:</span>
            <span>Подразделение:</span>
          </div>
          <div className="modalContent__data" >
            <span>{userCardData.phone}</span>
            <span>{userCardData.email}</span>
            <span>{userCardData.hire_date}</span>
            <span>{userCardData.position_name}</span>
            <span>{userCardData.department}</span>
          </div>
        </div>
        <div className="modalContent__additionalInfo">
          <h4>Дополнительная информация</h4>
          <span>Разработчики используют текст Lorem Ipsum в качестве заполнителя макета
            страницы. Так как дополнительной информации в JSON нет, а адрес нигде не используется
            закинул его сюда: {userCardData.address}
          </span>
        </div>
      </div>

    </div>
  )
};

export default Modal