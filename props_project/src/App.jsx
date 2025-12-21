import User from "./User";

function App() {
  return (
    <div>
       {/* <h1>Props in React JS</h1> */}
      {/* <User name="Rutuja Ramdas Pujari" /> */}
      {/* <User name="Rutuja Ramdas Pujari" age={29} email="rutuja@test.com" />  */}
      
      const name = "Anil";
      let age = 29;
      let email = "anil@test.com";
      let user = {name: "Anil", age: 29, email: "anil@test.com" };

      <User user={user} />
      <User name={name} age={age} email={email} /> 

      let colleges = ["IIT", "DU", "NIT"];
<College name={colleges[0]} />
<College name={colleges[1]} />
<College name={colleges[2]} />
    </div>
  );
}


export default App;