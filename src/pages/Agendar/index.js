import React, { useState } from 'react'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import img from "../../img/logo-h.png";

const Agendar = () => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState([]);
  const navigate = useNavigate();

  const Header = () => {
    return (
      <C.Header>
        <C.img src={img} alt="Logo da medical" />
      </C.Header>
    );
  }

  const handleChange = (event) => {
    setData(event.target.value);

    
  }; 
  // função para converter para padrão brasileiro
  function converterData(data) { 
    const [ano, mes, dia] = data.split('-');
    const dataBrasileira = `${dia}/${mes}/${ano}`;
    return dataBrasileira;
  }
  // salva uma consulta no banco
  const handleSubmit = (event) => {
    event.preventDefault();
    const horario = event.target.value;
    const dataBrasileira = converterData(data); 

    const usuario = JSON.parse(localStorage.getItem("usuario"))
    console.log(usuario)

    const consulta = {
        "nome_usuario": usuario.usuario.nome, 
        "data": dataBrasileira,
        "horario": horario,
        "cpf": usuario.usuario.cpf
    } 

    const token = (usuario.token); 

    axios.post('http://localhost:3000/consultas', consulta, { headers: {
      'Authorization': `Bear ${token}`
  }}
  ).then((response) => {
    console.log(response.data)
    alert("Agendado com sucesso!" + " " + "Para o dia" + " " + dataBrasileira + " " + "às" + " " + horario);
    navigate("/home");
  }).catch(error => {
    alert(error.response.data.mensagem)
  }); 
  };

  function trazerConsulta(event) {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    const token = (usuario.token);
    event.preventDefault();
    const dataBrasileira = converterData(data); 
    axios.post('http://localhost:3000/consultas/horariodisponiveis', dataBrasileira, { headers: {
      'Authorization': `Bear ${token}`
    }}
  ).then((response) => {
    setHorario(response.data.horario)
    console.log(response.data.horario)
  }).catch(error => {
    alert(error.response.data.mensagem)
  }); 
  }


  return (
    <C.Container>
    <Header />
    <C.body>
    <C.div>
    <C.h1>Marcar Consulta</C.h1>
    <form onSubmit={trazerConsulta}>
      <C.label>
        Data disponível:
        <C.Input type="date" value={data} onChange={handleChange} />
      </C.label>
      <C.button type="submit">Enviar</C.button>
    </form>
    <C.p>Horário disponível</C.p>
    {horario.length != 0 && <C.Div>{horario.map((item) => {
      return <C.input type= "button" disabled={!item.status} onClick={handleSubmit} value={item.horario} key={item.horario} />; 
    })}</C.Div>}
    </C.div>
    </C.body>
    </C.Container>
    
    
  );
};

export default Agendar;