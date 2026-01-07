import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    counterFunction();
  }, [counter]);

  useEffect(() => {
    callOnce();   // FIX: function must be invoked
  }, []);

  function counterFunction() {
    console.log("counterFunction", counter);
  }

  function callOnce() {
    console.log("callOnce function called");
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter {counter}
      </button>
      <button onClick={() => setData(data + 1)}>
        Data {data}
      </button>
    </div>
  );
}

export default App;
