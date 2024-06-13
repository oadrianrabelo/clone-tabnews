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
    maxWidth: "80%",
    maxHeight: "80%",
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

  const enviarEmail = (aliancaEscolhida) => {
    // Simular o envio do email aqui (pode ser uma chamada para uma API de backend)
    console.log(`Usuário escolheu a aliança ${aliancaEscolhida}`);
    // Aqui você poderia adicionar a lógica para enviar o email de verdade
    // Pode utilizar bibliotecas como nodemailer no backend para isso
  };

  return (
    <>
      <div
        className="alianca-thumbnail"
        style={{ backgroundImage: `url(${imgSrc})` }}
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
          style={{ maxWidth: "100%", maxHeight: "400px", marginBottom: "20px" }}
        />
        <button onClick={() => enviarEmail(nome)}>Enviar Email</button>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </>
  );
};

export default Alianca;
