import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <section className="container">
      <h4>We have {people.length} birthdays today</h4>
      {people.map((d) => {
        return <List key={d.id} {...d}></List>;
      })}
      <button onClick={() => setPeople([])}>remove items</button>
    </section>
  );
}

export default App;
