import React, { useState } from "react";

function TextsField() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "/",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
  };

  const handleTranslate = (str) => {
    let strToArr = str.toLowerCase().split("");

    console.log(strToArr);

    let something = [];

    strToArr.forEach((element) => something.push(alphabet[element]));

    console.log(something);

    setResult(something.join(""));
  };

  // Handle Change

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="wrapper">
      <h1>Morse Code translator</h1>
      <input
        type="text"
        placeholder="Enter your text here"
        onChange={handleChange}
      ></input>
      <button className="submit-button" onClick={() => handleTranslate(input)}>
        Translate
      </button>

      <div className="result">{result}</div>
    </div>
  );
}

export default TextsField;
