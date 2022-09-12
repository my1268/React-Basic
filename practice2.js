import { useState, useEffect } from "react";

function App() {
  const [aa, setA] = useState(false);
  const click = () => setA((prev) => !prev);
  function Title() {
    useEffect(() => {
      console.log("hi");
      return () => console.log("bi");
    }, []);
    return <h1>HELLO</h1>;
  }
  return (
    <div>
      {aa ? <Title /> : null}
      <button onClick={click}>{aa ? "Hide" : "Show"}</button>
    </div>
  );
}
