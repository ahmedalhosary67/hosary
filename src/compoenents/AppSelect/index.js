import React from "react";
// import "antd/dist/antd.css";
import "./main.css";
import { Form, Select } from "antd";
const { Option } = Select;

const AppSelect = ({ onChange, name, label, data, value, required }) => {
  const placeHolder = "Select";
  console.log(value);
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          // defaultValue={value}
          // allowClear
        >
          {data.map((item) => (
            <Option key={item.key || item.id} value={item.key}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default AppSelect;
