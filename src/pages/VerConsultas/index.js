import React, { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";




const VerConsultas = () => {
  const [consultas, setConsultas] = useState([]);
  const navigate = useNavigate();
  

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
    <div>
    {consultas.length != 0 && <div>{consultas.map((item) => {
      return <p key={item.id_consulta} >
        {"id:" + item.id_consulta + "Paciente:" + item.Paciente + "CPF:" + item.cpf + "Data:" + item.data + "Horário" + item.horario}
      </p>; 
    })}</div>}
    </div>
    
  );
};

export default VerConsultas;