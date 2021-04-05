import React, { useState }  from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCountClicks] = useState("");
    let [ind, setIdClicks] = useState(0);

    const handleClick = () => {
      //good practice:
      //make a copy of state, modify it, and then setState to the copy
      const newId = ind++;
      debugger;
      setIdClicks(newId)
      alert (ind,newId);
      let newTaco = "";
      if (newId%2 === 0 )
      {newTaco = "dudete"
      }
      else{newTaco = "dude"}
      
      countClicks += newTaco;
      let newCountClicks = "";
      newCountClicks += countClicks;
      setCountClicks(newCountClicks)
    }
  
    return (
      <>
        <h3>Welcome, {yourName} </h3>
        <p>{countClicks}</p>
        <button onClick={(handleClick)}>Click Me</button>
      </>
    )
  }