import React, { useEffect } from "react";
// import "antd/dist/antd.css";
import "./main.css";
import { Form, Input } from "antd";
import { useState } from "react";

const AppInput = ({ name, label, required, type, value, item }) => {
  const handleNumber = (i) => {
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
          min={0}
        />
      </Form.Item>
    </>
  );
};

export default AppInput;
