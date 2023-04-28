import React from "react";

const CustomInput = (props) => {
  return (
    <div>
      <input
        {...props}
        className="form-control"
        style={{
          border: props.error && props.errorMessage ? "1px solid red" : "",
        }}
      />
      {props.error && props.errorMessage ? (
        <>
          <h6
            style={{
              color: "red",
              paddingLeft: "5px",
              textTransform: "capitalize",
            }}
          >
            {props.errorMessage}
          </h6>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomInput;
