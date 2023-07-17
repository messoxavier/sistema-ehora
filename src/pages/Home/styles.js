import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  background-color: #203197;
`;

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: white;
`;

export const img = styled.img`
  width: 200px;
  height: auto;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 350px;
  padding: 20px;
  background-color: #203197;

  @media (max-width: 768px) {
    padding: 5px;
    width: 50%;
  }
`;

export const Div = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 60px;
  font-weight: 400;
  margin-bottom: 20px;
  width: 200%;
  height: 25%;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const H1 = styled.h1`
  color: #909090;
  cursor: pointer;
  margin: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 250px;

  @media (max-width: 768px) {
    font-size: 25px;
    margin: 10px;
    margin-bottom: 10px;
    margin-left: 40px;
    margin-top: 20px;
  }
`;

export const Paragraph = styled.p`
  color: #909090;
  margin: 20px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin: 25px;
    margin-left: 40px;
    margin-right: 40px;
  }
  
  @media (min-width: 1280px) {
    margin: 20px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const Icon = styled.img`
  width: 120px;
  float: right;
  margin-top: -15%;
  margin-right: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;


