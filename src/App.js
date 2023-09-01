import { useState } from "react";
import Button from "./Button";


function App() {
  const [color, setColor] = useState("white")
  return (
    <div className="h-screen w-screen scroll-m-3" style={{backgroundColor: color}} >
      <div className=" flex bottom-10 gap-10 text-center text-white text-lg px-4 py-4 left-5 right-5 fixed rounded-full justify-center bg-purple-300 animate-none ">
      <Button setColor={setColor} color={"white"} />
      <Button setColor={setColor} color={"red"} />
      <Button setColor={setColor} color={"blue"} />
      <Button setColor={setColor} color={"green"} />
      <Button setColor={setColor} color={"brown"} />
      <Button setColor={setColor} color={"purple"} />
      <Button setColor={setColor} color={"orange"} />
      <Button setColor={setColor} color={"olive"} />
      <Button setColor={setColor} color={"grey"} />
    </div>
    </div>
  );
}

export default App;
