import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../img/logo-h.png";
import axios from "axios";

const Signup = () => {
  const [text, setText] = useState("");
  const [documentId, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    const usuario = {
      "nome_usuario": text,
      "senha": senha,
      "cpf": documentId,
      "email": email
  }

  axios.post('http://localhost:3000/usuario/cadastro', usuario
  ).then((response) => {
    console.log(response.data)
    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  }).catch(error => {
    alert(error.response.data.mensagem)
  });
    
  };

  return (
    <C.Container>
      <C.Content>
      <C.img src={img} alt="Logo da medical" />
      <Input
          type="text"
          placeholder="Digite seu nome completo"
          value={text}
          onChange={(e) => [setText(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Informe seu CPF"
          value={documentId}
          onChange={(e) => [setCPF(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
