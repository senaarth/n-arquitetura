import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import styles from "./styles.module.scss";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function validateEmail(emailAddress) {
    const validation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(emailAddress).toLowerCase());
  }

  async function handleSubmit() {
    if (email === "" || subject === "" || message === "") {
      toast.error("Favor preencher todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Favor inserir email válido.");
      return;
    }

    const mail = {
      name,
      email,
      subject,
      message,
    };

    await axios
      .post("/api/mail", mail, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("Mensagem enviada!");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Erro, favor tentar novamente.");
      });
  }

  return (
    <form className={styles.formContainer}>
      <h5>FALE CONOSCO</h5>
      <input
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="Seu Nome"
      />
      <input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Seu Email"
      />
      <input
        value={subject}
        onChange={({ target }) => setSubject(target.value)}
        placeholder="Assunto"
      />
      <textarea
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        placeholder="Mensagem"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        type="submit"
      >
        ENVIAR
      </button>
    </form>
  );
}
