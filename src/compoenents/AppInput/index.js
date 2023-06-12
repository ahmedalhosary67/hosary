import React, { useEffect } from "react";
// import "antd/dist/antd.css";
import "./main.css";
import { Form, Input } from "antd";
import { useState } from "react";

const AppInput = ({ name, label, required, type, value }) => {
  const handleNumber = (i) => {
    console.log(i.target);
  };
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
          // defaultValue={value}
          value={value}
          min={0}
        />
      </Form.Item>
    </>
  );
};

export default AppInput;
