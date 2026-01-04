const Counter = ({count}) => {
   
    const handleCounter = () => {
    console.log("handleCounter called");
  };

  useEffect(() => {
    handleCounter();
  }, []);
  
useEffect(() => {
    handleData();
  }, [count, data]);
  return (
    <div>
      <h1>Counter Component</h1>
    </div>
  );
};

export default Counter;