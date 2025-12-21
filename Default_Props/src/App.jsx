import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from "./User"
import './App.css'
import Wrapper from "./Wrapper";
function App() {
  return (
    
  //  <div>
  //   <User name="Rutuja Pujari" />
  //  <User name="Pranav Pujari" />
  //  <User />
  //  <User />

  //   </div>

      <div>
        <h1>Props in React js</h1>
        <Wrapper color="Orange">
          <h1>Hello Everyone</h1>
        </Wrapper>

        <Wrapper>
          <h1>Hello Anil</h1>
        </Wrapper>

        <Wrapper>
          <h1>Hello Admin</h1>
          <h2 style={{ color: "Red" }}>Please Login</h2>
        </Wrapper>
      </div>
    );
  }

  export default App;
