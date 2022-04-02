import React, { useRef, useEffect, useState } from "react";

const Ref = () => {
  const inputRef = useRef(null);
  const [name, Setname] = useState("write Your name ")
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <React.Fragment>
        <h1 style={{marginBottom: "10px", background: "blue", borderRadius: "5px"}}>UseRef</h1>
      <form onSubmit={(e)=>{
          e.preventDefault()
          Setname(inputRef.current.value)
          inputRef.current.value = null 
      }}>
      <h3>{name}</h3>
      <input type="text" placeholder="go type " ref={inputRef} />
      
      <button onClick={(e)=>{
          e.preventDefault()
          Setname(inputRef.current.value)
          inputRef.current.value = null 
      }}>Click</button>
      </form>
    </React.Fragment>
  );
};

export default Ref;
