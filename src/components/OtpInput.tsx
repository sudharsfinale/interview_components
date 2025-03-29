import React, { useEffect, useRef, useState } from "react";

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(5).fill(""));
  const inputRefs = useRef<any>([]);
  const handleInputChange = (value: any, index: any) => {
    if (isNaN(value)) {
      return;
    }
    const newValue = value?.trim();
    let newArr = [...inputArr];
    newArr[index] = newValue?.slice(-1);
    setInputArr(newArr);
    newValue && inputRefs.current[index + 1]?.focus();
  };
  const handleKeyDown = (e: any, index: number) => {
    debugger;
    if (!e.target.value && e.key === "Backspace") {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight") {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft") {
      inputRefs.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    inputRefs?.current?.[0]?.focus();
  }, []);
  const inputStyles: any = {
    width: "50px",
    height: "50px",
    textAlign: "center",
    fontSize: 20,
  };
  const inputWrapperStyle: any = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };
  return (
    <div style={inputWrapperStyle}>
      {inputArr?.map((_value, index) => (
        <input
          style={inputStyles}
          ref={(input: any) => (inputRefs.current[index] = input)}
          onChange={(e) => handleInputChange(e.target.value, index)}
          value={_value}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
