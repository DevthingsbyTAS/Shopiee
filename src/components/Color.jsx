import React from "react";

const Color = (props) => {
  console.log(props);
  return (
    <ul className="colors ps-0 m-0">
      {props?.colorData &&
        props?.colorData?.map((item, key) => (
          <li
            onClick={() => {
              props.setcolor(item?._id);
            }}
            key={key}
            style={{
              backgroundColor: item?.title,
              cursor: "pointer",
              border: props?.value == item?._id ? "2px solid #febd69" : "",
              boxShadow:
                props?.value == item?._id ? "0px 1px 10px #febd69" : "",
            }}
          ></li>
        ))}
    </ul>
  );
};

export default Color;
