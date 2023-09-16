import React, { useState } from "react";
import { HiPlus, HiMinus, HiOutlineX } from "react-icons/hi";
import { RxSlash } from "react-icons/rx";

function Operation() {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [result, setResult] = useState(null);
  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(null);

  const operations = {
    plus: (num1, num2) => num1 + num2,
    minus: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
  };

  let handleSubmit = (e, input) => {
    if (input === 1) {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  };

  const mathOperations = (operator) => {
    let a = parseFloat(num1);
    let b = parseFloat(num2);

    if (isNaN(a)) {
      setError("Error!");
      setSuccess(null);
      setResult("Num1 can not be empty");
      return;
    } else if (isNaN(b)) {
      setError("Error!");
      setSuccess(null);
      setResult("Num2 can not be empty");
      return;
    } else {
      const solution = operations[operator];

      if (solution) {
        const calc = solution(a, b);
        setResult(`Result -: ${calc}`);
        setSuccess("Success!");
        setError(null);
      } else {
        setResult("Invalid Result");
        setError("Error!");
      }
    }
  };

  return (
    <div className="Operation">
      <h1>React Calculator</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Num 1"
          onChange={(e) => {
            handleSubmit(e, 1);
          }}
          value={num1}
        />
        <input
          type="text"
          placeholder="Num 2"
          onChange={(e) => {
            handleSubmit(e, 2);
          }}
          value={num2}
        />
      </div>
      <div className="buttons">
        <button onClick={() => mathOperations("plus")} type="button">
          {" "}
          <HiPlus className="icons" />{" "}
        </button>
        <button onClick={() => mathOperations("minus")} type="button">
          {" "}
          <HiMinus className="icons" />{" "}
        </button>
        <button onClick={() => mathOperations("multiply")} type="button">
          {" "}
          <HiOutlineX className="icons" />{" "}
        </button>
        <button onClick={() => mathOperations("divide")} type="button">
          {" "}
          <RxSlash className="icons" />{" "}
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      {result != null && <p className="result">{result}</p>}
    </div>
  );
}

export default Operation;
