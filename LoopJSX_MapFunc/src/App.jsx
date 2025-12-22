import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const userData = [
    {
      name: "Anil",
      age: 29,
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "Sam",
      age: 36,
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "Peter",
      age: 20,
      email: "peter@test.com",
      id: 3,
    },
    {
      name: "Bruce",
      age: 50,
      email: "bruce@test.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h1>Dummy Data</h1>

      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>anil@test.com</td>
            <td>29</td>
          </tr>

        </tbody>
      </table>

      <h1>Loop in JSX with Map Function</h1>

      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}> {/* key helps React track each row */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
