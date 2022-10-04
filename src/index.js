import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here

  return (
    <button onClick={props.reset}>{props.children}</button>
  );

};

const Application = () => {

  const [name, setName] = useState("");

  // your code here

  const reset = () => {
    // this.target.value = "";
    // your code here
    setName("");
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      {/* your code here -- this entire line including the curly braces can be removed */}
      {
        // <button onClick={reset
        // }>Reset</button>
        <Button reset = {reset
        }>Reset</Button>}

      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
