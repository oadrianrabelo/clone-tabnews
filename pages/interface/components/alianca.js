import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    overflow: "auto",
    padding: "20px",
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    backgroundColor: "#222",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "10px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: "10px",
  },
  "@media (max-width: 768px)": {
    content: {
      width: "90%",
      height: "90%",
      padding: "10px",
    },
    imageContainer: {
      alignItems: "center",
      marginBottom: "10px",
      flexDirection: "column",
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      borderRadius: "8px",
      marginBottom: "20px",
    },
  },
};

Modal.setAppElement("#__next");

const Alianca = ({
  imgSrc,
  detalhesImgSrc,
  outrasImagens = [],
  nome,
  textoOpcional,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const enviarEmail = async () => {
    const userConfirmed = window.confirm(
      "Você tem certeza que deseja escolher esta aliança?"
    );
    if (userConfirmed) {
      console.log("Usuário confirmou a escolha, enviando email...");
      try {
        const response = await fetch("/api/v1/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ aliancaEscolhida: nome }),
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        alert("Verifique seu email!");
      } catch (error) {
        alert("Houve um problema ao enviar o email.");
      }
    }
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
        <h2 style={{ color: "#fff", textAlign: "center" }}>{nome}</h2>
        <div style={customStyles.imageContainer}>
          <img
            src={detalhesImgSrc}
            alt={`Detalhes da ${nome}`}
            style={customStyles.image}
          />
          {outrasImagens.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`Imagem ${index + 2}`}
              style={customStyles.image}
            />
          ))}
        </div>
        {textoOpcional && <p style={customStyles.text}>{textoOpcional}</p>}
        <button
          style={{
            alignSelf: "center",
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
            display: "block",
            margin: "10px auto",
          }}
          onClick={enviarEmail}
        >
          Eu escolho este!
        </button>
        <button
          style={{
            alignSelf: "center",
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
            display: "block",
            margin: "10px auto",
          }}
          onClick={closeModal}
        >
          Fechar
        </button>
      </Modal>
    </>
  );
};

export default Alianca;
