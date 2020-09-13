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
        <Modal isOpen={modalIsOpen} onRequest={() => setModalIsOpen(false)}>
          <h2> Name.placeholder </h2>
          <div className="modal-data-props">
            <p className="modal-props"> email: email.placeholder </p>
            <p className="modal-props"> age: age.placeholder </p>
            <p className="modal-props"> hometown: hometown.placeholder </p>
            <p className="modal-props"> buddy or patient? BoP.placeholder </p>
            <p className="modal-props"> Hobbies: hobbies.placeholder </p>
            </div>
          <div className="modal-btn delete">
            <button className="small-button"> Delete </button>
          </div>
          <div className="modal-btn close">
            <button className="small-button" onClick={() => {setModalIsOpen(false)}}> Close </button>
          </div>
        </Modal>
      </div>
    )
  }
}


/* creo que todo esto iria en el shame file

overlay {
  background: "#FFFF00";
  opacity: 0.5
}

modal-props {
  border-bottom: 2px solid #C4C4C4;
  position: absolute
}

modal-data-props {
  display: flex;
  flex-wrap: wrap;
}  */
