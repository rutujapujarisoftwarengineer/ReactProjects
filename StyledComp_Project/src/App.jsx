import { useState } from 'react';
import './App.css';
import styled from "styled-components";

/* Styled Components (Defined Outside App) */

const Heading = styled.h1`
  color: red;
  border: 1px solid green;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  text-align: center;
`;

const StyleBtn = styled.button`
  color: red;
  width: 130px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid red;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* App Component */

function App() {
  return (
    <Container>
      <Heading>Styled Component with React JS</Heading>

      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading 2</Heading>
      <Heading>Hello Heading 3</Heading>

      <div>
        <StyleBtn>Login</StyleBtn>
        <StyleBtn>Signup</StyleBtn>
        <StyleBtn>Back</StyleBtn>
      </div>
    </Container>
  );
}

export default App;
