import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import img from "../../img/logo-h.png"

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    /* const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    } */

    try {
    const usuario = {
      cpf: email,
      senha: senha,
  };
      
    const response = await axios.post(
      "http://localhost:3000/usuario/login",
       usuario
    );

    const user = {
      usuario: response.data.usuario,
      token: response.data.token,
    };
  
    localStorage.setItem("usuario", JSON.stringify(user));
    navigate("/home");
  } catch(error) {
    alert(error.response.data.mensagem)
  };

  };

  return (
    <C.Container>
      <C.Content>
      <C.img src={img} alt="Logo medical"/>
        <Input
          type="email"
          placeholder="Digite seu CPF"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
        <Button Text="Entrar" onClick={handleLogin} />
      </C.Content>
    </C.Container>
  );
};

export default Signin;
