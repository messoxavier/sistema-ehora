import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: center;
width: 100%;
background-color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  background-color: #203197;
  overflow-y: scroll; 
`;

export const img = styled.img`
  width: 200px;
  height: auto;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const h1 = styled.h1`
  color: white;
  font-size: 26px;
  margin-bottom: 50px;
  margin-right: 400px;
  margin-bottom: 20px;
`;

export const div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
`;

export const ConsultasList = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  width: 800px;  
`;

export const ConsultaItem = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: white;
  color: blue;
`;

export const ConsultaDetails = styled.p`
margin-bottom: 10px;
margin-right: 10px;
`;