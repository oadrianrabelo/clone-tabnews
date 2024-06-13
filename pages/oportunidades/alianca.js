import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "85%", // Largura do modal ajustada para 50% da largura da tela
    height: "85%", // Altura do modal ajustada para 50% da altura da tela
    overflow: "auto",
    padding: "20px",
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    backgroundColor: "#333",
  },
};

Modal.setAppElement("#__next");

const Alianca = ({ imgSrc, detalhesImgSrc, nome }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className="alianca-thumbnail"
        style={{ backgroundImage: `url(${imgSrc})`, cursor: "pointer" }}
        onClick={openModal}
      ></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 style={{ color: "#fff" }}>{nome}</h2>
        <img
          src={detalhesImgSrc}
          alt={`Detalhes da ${nome}`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
          }}
          onClick={closeModal}
        >
          Fechar Modal
        </button>
      </Modal>
    </>
  );
};

export default Alianca;
