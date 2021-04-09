import React, { useState } from "react";

import data from "./data";
import Question from "./Question";

function App() {
  // const [questions, setQestions] = useState(data);
  return (
    <div className="main">
      <div className="container">
        <h3>Questions and answers about Login:</h3>
        <section className="info">
          {data.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
