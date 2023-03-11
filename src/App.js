import React,{useState} from 'react';
export default function Change(){
  const[name,setName]=useState('Amit');
  const handleClick=()=>{
    setName(name==='Amit'?'Rajan':'Amit');
  };
  return(
    <div>
      {name=== 'Amit'?<h2> My name is Amit</h2>:<h2>My name is Rajan</h2>}
      <button onClick={handleClick}>Change Name</button>
      </div>
  );
}
