import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      {props.options.map(option => {
        return <Option key={option} optionText={option} />;
      })}
    </div>
  );
};

export default Options;
