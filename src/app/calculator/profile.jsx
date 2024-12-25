"use cilent";
import React, { useState } from "react";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function calculator() {
  const [number, setnumber] = useState;
  return (
    <div>
      {" "}
      <p>Number:{number}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => setnumber(number)}>{number}</button>
      </div>
    </div>
  );
}
