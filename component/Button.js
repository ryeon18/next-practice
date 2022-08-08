import React from "react";

const Button = ({ data, className, onClickFunction, disabled }) => {
  return (
    <>
      {disabled === true ? (
        <button
          onClick={() => onClickFunction()}
          className={`${className}`}
          disabled
        >
          {data}
        </button>
      ) : (
        <button
          onClick={() => onClickFunction()}
          className={`${className}`}
        ></button>
      )}
    </>
  );
};

export default Button;
