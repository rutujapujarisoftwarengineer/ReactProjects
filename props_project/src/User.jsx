// function User(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );
// }

// function User({ name }) {
//   return <h1>{name}</h1>;
// }

//Passing multing props
// function User({ name, age, email }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>{age}</h2>
//       <h2>{email}</h2>
//     </div>
//   );
// }

function User({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.email}</h2>
    </div>
  );
}
export default User;