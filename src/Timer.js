import React, { useState,useRef, useEffect }  from "react";

const Timer = ({ seconds}) => {
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(seconds);
  
    useEffect(() => {
      // exit early when we reach 0
      if (!timeLeft) 
        
      return;
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    },[timeLeft]);
  
    
    return (
      <div>
      <h1>{Math.floor(timeLeft/60)+":"+ timeLeft%60}</h1>
    </div>
     
    );
  };
  export default Timer;