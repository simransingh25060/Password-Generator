import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '@!#&';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-8 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center text-4xl mb-6">Password Generator</h1>
        
   
        <div className="flex rounded-lg shadow overflow-hidden mb-6"> 
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-gray-800 rounded-lg"
            placeholder="password"
            readOnly
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-x-2">
              <label htmlFor="passwordLength" className="text-white">Length:</label>
              <input
                type="range"
                id="passwordLength"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="text-white">{length}</span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-6 mb-4">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                id="numberInput"
                className="cursor-pointer"
              />
              <label htmlFor="numberInput" className="text-white">Numbers</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                id="charInput"
                className="cursor-pointer"
              />
              <label htmlFor="charInput" className="text-white">Special Characters</label>
            </div>
          </div>
        </div>

  
        <div className="flex justify-center">
          <button
            onClick={passwordGenerator}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
