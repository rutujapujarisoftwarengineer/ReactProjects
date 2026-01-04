import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  console.log("callOnce function called");

  useEffect(() => {
    callOnce();
  }, [])

   useEffect(() => {
    callOnce();
  }, [counter]);

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  );
}
export default App;
