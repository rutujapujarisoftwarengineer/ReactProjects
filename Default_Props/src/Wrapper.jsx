function Wrapper({ children, color = "green" }) {
  return (
    <div
      style={{
        color: color,
        border: "5px Solid Green",
        width: "300px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;