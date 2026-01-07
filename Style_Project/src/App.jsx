import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    // <div style="color: blue; background-color: red;">
    //   This is a div with inline styles.
    // </div>

    // <div style={{ color: 'red', backgroundColor: 'green' }}>
    //   React JS StyleReact
    // </div>

    function App() {
      const cardStyle = {
        border: "1px solid #ccc",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px",
      };

      const imageStyle = {
        width: "200px",
      };

      const textContainerStyle = {
        padding: "5px",
      };
      return (
        <><div style={cardStyle}>
          <img style={imageStyle} src="..." alt="" />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div>
            <h1 style={{ color: "red" }}>Inline Style in React</h1>
            <div
              style={{
                border: "1px solid #ccc",
                width: "200px",
                boxShadow: "1px 2px 3px 0px #cccccc57",
                margin: "10px",
              }}
            >
              <img
                style={{ width: "200px" }}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="" />
              <div style={{ padding: "5px" }}>
                <h4>Anil Sidhu</h4>
                <p>Software Developer</p>
              </div>
            </div>
          </div><div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={cardStyle}>
              <img style={imageStyle} src="..." alt="" />
              <div style={textContainerStyle}>
                <h4>Anil Sidhu</h4>
                <p>Software Developer</p>
              </div>
            </div>

            <div style={cardStyle}>
              <img style={imageStyle} src="..." alt="" />
              <div style={textContainerStyle}>
                <h4>Anil Sidhu</h4>
                <p>Software Developer</p>
              </div>
            </div>
          </div></>


      );
    }
  )
}

export default App;
