import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("delhi");
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>

      <input type="radio" name="gender" id="male" value="male"
        onChange={(e) => setGender(e.target.value)}
        checked={gender === "male"} />
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="female" value="female"
        onChange={(e) => setGender(e.target.value)}
        checked={gender === "female"} />
      <label htmlFor="female">Female</label>

      <br /> <br />

      <h2>Select City</h2>

      <select
        defaultValue="delhi"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>
      <h1>Selected Gender: {gender}</h1>
      <h1>Selected City: {city}</h1>
    </div>

  );
}

export default App;
