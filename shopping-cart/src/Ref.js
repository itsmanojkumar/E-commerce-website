import React, { useContext, useRef } from 'react'
import { UserContext } from './App'; 
function Ref() {
  const user=useContext(UserContext);
    const inputElement=useRef();
    const focusInput=()=>{
        inputElement.current.focus();
    };
  return (
    <>
    <div>
    <input type='text' ref={inputElement}/>
    <button onClick={focusInput}>focusInput</button>
    <h1>{user}</h1>
    <h1>{user}</h1>
    </div>
    </>
  );
}

export default Ref