import React, { useState } from "react";

function TextsField() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
  };

  const morseChars = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ",",
  };

  console.log(Object.entries(morseChars));

  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" placeholder="Enter your text here"></input>
        <button className="submit-button">Translate</button>
      </form>
      <div className="result">some text</div>
    </div>
  );
}

export default TextsField;