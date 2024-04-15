import {useState, useRef} from "react";
import BoxColor from "./BoxColor";


function MyForm() {
  const[value,setValue] =useState ("");
  const[color, setColor] =useState("");
  const inputRef =useRef(null)

  const handleInputchein = () => {
    setColor(inputRef.current.value.toLowerCase())
    setValue(inputRef.current.value.toLowerCase())
  }


  return (
    <>
    <input
      type="text"
      placeholder="Chus a kolor"
      value={value}
      onChange={handleInputchein}
      ref={inputRef}
    />
      <BoxColor color={color} value={value}/>
    </>
  );
}

export default MyForm;