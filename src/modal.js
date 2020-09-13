import React, {useState} from 'react';
import Modal from 'react-modal'
import './App.css';

class Modal extends React.Component{


  render(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
      //reemplazar el boton aquí la fila de la tabla  */ 
      <div>
      <button onClick={() => setModalIsOpen(true)}> open modal </button>
        <Modal isOpen={modalIsOpen} onRequest={() => setModalIsOpen(false) } >
          <h2> Name.placeholder </h2>
          <div className="modalcontiner">
            <p className="modalprops"> email: email.placeholder </p>
            <p className="modalprops"> age: age.placeholder </p>
            <p className="modalprops"> hometown: hometown.placeholder </p>
            <p className="modalprops"> buddy or patient? BoP.placeholder </p>
            <p className="modalprops"> Hobbies: hobbies.placeholder </p>
            </div>
          <div className="btn-container">
            <button className="small-button delete"> Delete </button>
            <button className="small-button close" onClick={() => {setModalIsOpen(false)}}> Close </button>
          </div>
        </Modal>
      </div>
    )
  }
}
Modal.setAppElement(document.getElementById('root'));