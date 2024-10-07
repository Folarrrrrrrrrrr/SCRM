import React, { useState } from "react";
import './modal.css'

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal){
    document.body.classList.add('activeModal')
  }else{
    document.body.classList.remove('activeModal')
  }
  return(
    <div className='modalContainer'>
      <button onClick={toggleModal} className={props.modalButtonStyle}> {props.btnText}</button>
    {modal &&(
      <div className="modal">
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modalContent">
          <p className="text text-black modalText">
            {props.summaryText}
           </p>
          <button className="closeModal text-white p-3 ml-5 mb-10 bg-black" onClick={toggleModal}>CLOSE</button>
        </div>
      </div>
    )}
    </div>
  );
}

