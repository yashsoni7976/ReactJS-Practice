import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("darkgrey");

  const colors = [
    "red",
    "yellow",
    "blue",
    "olive",
    "green",
    "purple",
    "orange",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "teal",
    "lime",
    "indigo",
    "violet"
  ];
  // Color list to avoid repetition

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((col) => (
            <Button key={col} color={col} setColor={setColor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
