import React, { useState } from "react";

function TextsField() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleChange}>
      <input type="text" placeholder="Enter your text here"></input>
      <button className="submit-button">Translate</button>
    </form>
  );
}

export default TextsField;
