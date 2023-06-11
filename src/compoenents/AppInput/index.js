import React, { useEffect } from "react";
// import "antd/dist/antd.css";
import "./main.css";
import { Form, Input } from "antd";
import { useState } from "react";

const AppInput = ({ name, label, textArea, required, type, addonBefore }) => {
  const [num, setNum] = useState(0);
  const handleNumber = (i) => {
    console.log(i.target.value.toLocaleString());
    const commas = i.target.value.toLocaleString();
    type === "number" && setNum(commas);
  };
  useEffect(() => {
    console.log(num);
  }, [num]);
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: required,
          },
        ]}
      >
        <Input
          type={type}
          onChange={handleNumber}
          value={num}
          addonBefore={addonBefore}
        />
      </Form.Item>
    </>
  );
};

export default AppInput;
