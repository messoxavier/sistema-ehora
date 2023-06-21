import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import img from "../../img/logo-h.png";
import img1 from "../../img/icone-agendamento.png";
import img2 from "../../img/icone-consulta.png";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const Header = () => {
    return (
      <C.Header>
        <C.img src={img} alt="Logo da medical" />
      </C.Header>
    );
  }
  const handleMarcarConsulta = () => {
    navigate("/agendar")
  };
  const handleVerConsultasAgendadas = () => {
    navigate("/consultas")
  };

  return (
    <C.Container>
      <Header />
      <C.body>
       <C.Div> 
      <C.h1 onClick={handleMarcarConsulta}>Marcar Consulta</C.h1>
      <C.Icon src={img1} alt="Ícone de agendamento" />
      <C.Paragraph>Agende uma consulta presencial, com um de nossos especialistas.</C.Paragraph>
      </C.Div>
      <C.Div>
      <C.h1 onClick={handleVerConsultasAgendadas}>Consulta Agendada</C.h1>
      <C.Icon src={img2} alt="Ícone de consulta" />
      <C.Paragraph>Veja suas próximas consultas agendadas.</C.Paragraph>
      </C.Div>
      </C.body>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
