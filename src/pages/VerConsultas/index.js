import React, { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import img from "../../img/logo-h.png";


const VerConsultas = () => {
  const [consultas, setConsultas] = useState([]);
  const navigate = useNavigate();
  
  const Header = () => {
    return (
      <C.Header>
        <C.img src={img} alt="Logo da medical" />
      </C.Header>
    );
  }

    useEffect(() => {
      trazerConsulta();
    }, []);
  
  const trazerConsulta = () => {
    
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    console.log(usuario)

    const consulta = {
        "cpf": usuario.usuario.cpf
    } 
    
    const token = (usuario.token); 

    axios.post('http://localhost:3000/consultas/porusuario', consulta, { headers: {
        'Authorization': `Bear ${token}`
    }}
  ).then((response) => {
    console.log(response.data)
    setConsultas(response.data.consultas)
   //navigate("/home");
  }).catch(error => {
    alert("Não existe nenhuma consulta para este usuário!")
    console.log(token)
    navigate("/home")
  }); 
  };

  return (
    <C.Container>
    <Header />
    <C.h1>Consulta Agendada</C.h1>
    <C.div>
    {consultas.length !== 0 && (
          <C.ConsultasList>
            {consultas.map((item) => (
              <C.ConsultaItem key={item.id_consulta}>
                <C.ConsultaDetails>
                  <strong>Identificação da consulta:</strong> {item.id_consulta}
                </C.ConsultaDetails>
                <C.ConsultaDetails>
                  <strong>Paciente:</strong> {item.Paciente}
                </C.ConsultaDetails>
                <C.ConsultaDetails>
                  <strong>CPF:</strong> {item.cpf}
                </C.ConsultaDetails>
                <C.ConsultaDetails>
                  <strong>Data:</strong> {item.data}
                </C.ConsultaDetails>
                <C.ConsultaDetails>
                  <strong>Horário:</strong> {item.horario}
                </C.ConsultaDetails>
              </C.ConsultaItem>
            ))}
          </C.ConsultasList> )}
    </C.div>
    </C.Container>
    
  );
};

export default VerConsultas;