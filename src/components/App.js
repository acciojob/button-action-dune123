import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [show,setShow]=useState(false);

  return (
    <div className="App" id="main">
     {show&& <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
    </div>
  );
}

export default App
