import React from 'react';
import { useRef } from 'react';
const Mycomponent = () => {
    const inputRef = useRef(null);
  const handleClick = ()=>{
    inputRef.current.focus();
  }

    return (
        <div >
            <input type= "text" ref={inputRef}></input>
            <button onClick={handleClick}>Focus input</button>
        </div>
    );
};

export default Mycomponent;