import React from "react";
import { Modal } from "react-bootstrap";
import PostShare from "../PostShare/PostShare";


function ShareModal({ modalOpened, setModalOpened }) {
  const handleClose = () => {
    setModalOpened(false);
  };

  return (
    <Modal show={modalOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
   <PostShare/>
      </Modal.Body>
    </Modal>
  );
}

export default ShareModal;
