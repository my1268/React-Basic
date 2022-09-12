import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [hi, setHi] = useState("");
  const click = () => setValue((a) => a + 1);
  console.log("bb");
  const change = (event) => setHi(event.target.value);
  useEffect(() => {
    console.log("aaa", hi);
  }, [hi]); //setHi의 값이 바뀔때마다 console에 찍어줌.
  return (
    <div>
      <input value={hi} onChange={change} type="text" placeholder="go write" />
      <h1>{counter}</h1>
      <button onClick={click}>click</button>
    </div>
  );
}
