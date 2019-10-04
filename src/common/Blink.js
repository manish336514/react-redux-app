// import React, { useState, useEffect } from "react";

// const Blink = () => {
//   //   const [timer, setTimer] = useState(0);
//   //   if (!timer && timer < 5) {
//   //     setInterval(() => {
//   //       setTimer(timer => timer + 1);
//   //     }, 1000);

//   //     clearInterval(timer);
//   //   }
//   //   if (timer == 5) {
//   //     clearInterval(timer);
//   //     setTimer(0);
//   //   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {timer} seconds have elapsed since mounting.
//       </header>
//     </div>
//   );
// };

// export default Blink;

import React, { useRef, useState } from "react";

const Blink = blinkdata => {
  const [count, setCount] = useState(0);
  //   const [countInTimeout, setCountInTimeout] = useState(0);

  //   const countRef = useRef(count);
  //   countRef.current = count;

  //   const getCountTimeout = () => {
  //     setTimeout(() => {
  //       setTimeoutCount(countRef.current);
  //     }, 2000);
  //   };

  const cacl = () => {
    console.log("in timer");
    console.log("blinkdata", blinkdata);

    if (count == 5) {
      setCount(0);
    } else setCount(count => count + 1);
  };

  setTimeout(() => {
    cacl();
  }, 3000);
  return (
    <div>
      <div>{blinkdata.blinkdata[count]}</div>
    </div>
  );
};

export default Blink;
