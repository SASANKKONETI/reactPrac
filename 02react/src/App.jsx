import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [hasNumber, setNumber] = useState(false);
  const [hasChar, setChar] = useState(false);

  function generatePassword(length) {
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charSet = lowerCaseChars + upperCaseChars;

    if (hasNumber) {
      charSet += numbers;
    }

    if (hasChar) {
      charSet += specialChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    return password;
  }

  var a = generatePassword(length);

  return (
    <>
      <p>Password Generator</p>
      <input type="text" name="" id="" value={a} />
      <br />
      <input
        type="range"
        id="volume"
        name="volume"
        min="1"
        max="20"
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <label htmlFor="volume">Length {length}</label>
      <input
        type="checkbox"
        id="number"
        name="number"
        checked={hasNumber}
        onChange={() => {
          setNumber(!hasNumber);
        }}
      />
      <label htmlFor="number">Number</label>
      <input
        type="checkbox"
        id="character"
        name="character"
        checked={hasChar}
        onChange={() => {
          setChar(!hasChar);
        }}
      />
      <label htmlFor="character">Char</label>
    </>
  );
}

export default App;
