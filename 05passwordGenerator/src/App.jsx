import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // Ye state password ki length store kar rahi hai. Default value 8 hai.
  const [length, setLength] = useState(8);

  // Ye boolean values store kar rahe hain ki kya number aur special characters allow hain ya nahi.
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // Ye state generated password ko store karegi.
  const [password, setPassword] = useState("");

  // Copy button ka text dynamically change karne ke liye state banayi.
  const [copySuccess, setCopySuccess] = useState("copy");

  // Password input field ko refer karne ke liye useRef hook ka use.
  const passwordRef = useRef(null);

  // Password generate karne wali function, jo conditions ke hisaab se password banati hai.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Agar number allowed hain toh number string me add karo.
    if (numberAllowed) str += "0123456789";

    // Agar special characters allowed hain toh special character string me add karo.
    if (charAllowed) str += "!@#$%^&*_+=[]{}~`";

    // Password ko random characters se generate karo based on length.
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Final password ko setPassword ke through state me store karo.
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Function to copy password to clipboard aur button ka text temporarily "Copied!" banane ke liye.
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Password text ko select karo
    window.navigator.clipboard.writeText(password); // Clipboard me password copy karo

    // Copy hone ke baad button ka text change karke feedback do.
    setCopySuccess("Copied!");

    // 2 seconds ke baad text phir se "copy" par wapas le aao.
    setTimeout(() => {
      setCopySuccess("copy");
    }, 2000);
  }, [password]);

  // Jab bhi length, numberAllowed, ya charAllowed change ho toh naya password generate karo.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        {/* Input field jisme generated password dikhai dega aur copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-5 py-0.5 shrink-0"
            aria-label="Copy password"
          >
            {copySuccess} {/* Ye button ka text hai jo copy hone par temporarily "Copied!" ban jaata hai */}
          </button>
        </div>

        {/* Length slider aur checkbox options ke saath password customization */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
              aria-label="Set password length"
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              aria-label="Allow numbers in password"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              aria-label="Allow special characters in password"
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
