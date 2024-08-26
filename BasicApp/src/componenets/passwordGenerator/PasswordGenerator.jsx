import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef=useRef(null)
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed,setPassword]);
const copyPasswordToClipboard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{passGenerator()},[length, charAllowed, numberAllowed,passGenerator])

  return (
    <div className="w-full max-w-md mx-auto mt-8">
    <div className="bg-gray-700 shadow-md rounded-lg p-6 text-orange-500">
      <h1 className="text-4xl text-center text-white mb-6">Password Generator</h1>
      <div className="flex items-center shadow rounded-lg mb-4">
        <input
          type="text"
          value={password}
          className="flex-1 outline-none py-2 px-3 bg-gray-800 text-white"
          placeholder="Generated Password"
          readOnly
          ref={passRef}
        />
        <button
        //   onClick={() => navigator.clipboard.writeText(password)}
        onClick={copyPasswordToClipboard}
          className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
        >
          Copy
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="lengthInput">Length: {length}</label>
        <input
          id="lengthInput"
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="numberInput"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          className="mr-2"
        />
        <label htmlFor="numberInput" className="text-gray-300">Include Numbers</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="charAllowed"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
          className="mr-2"
        />
        <label htmlFor="charAllowed" className="text-gray-300">Include Special Characters</label>
      </div>
      <button
        onClick={passGenerator}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Password
      </button>
    </div>
  </div>
  );
};

export default PasswordGenerator;
