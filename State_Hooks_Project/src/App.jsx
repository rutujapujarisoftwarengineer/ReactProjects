import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter";
// function App() {
//   const [fruit, setFruit] = useState("Apple");

//   const handleFruit = () => {
//     setFruit("Banana");
//   };

//   return (
//     <div>
//       <h1>State in React JS</h1>
//       <h2>{fruit}</h2>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//     </div>
//   );
// }


function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;
