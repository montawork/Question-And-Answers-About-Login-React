import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [display, setDisplay] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setDisplay(!display)}>
          {display ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{display && info}</p>
    </article>
  );
};

export default Question;
