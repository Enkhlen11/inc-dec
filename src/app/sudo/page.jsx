"use client";
import sudo from "@/style/sudo.module.css";
import { Squere } from "@/components/Squere";
import { useState } from "react";

const arrayContaining = [5, 2, 3, 4, 1, 6, 7, 8, 9];

export default function page() {
  const [numbers, setnumbers] = useState(arrayContaining);

  function incrementHandler() {
    // console.log("increment");

    const sorted = arrayContaining.sort();
    setnumbers([...sorted]);
  }
  function decrementHandler() {
    const sorted = arrayContaining.sort((a, b) => {
      return b - a;
    });
    setnumbers([...sorted]);
  }
  return (
    <div>
      <button className={sudo.button} onClick={incrementHandler}>
        inc
      </button>
      <button className={sudo.button} onClick={decrementHandler}>
        dec
      </button>{" "}
      <div className={sudo.bodyFlex}>
        {numbers.map((oneNum) => {
          return <Squere value={oneNum} />;
        })}
      </div>
    </div>
  );
}
