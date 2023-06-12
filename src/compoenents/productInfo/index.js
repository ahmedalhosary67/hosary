import React from "react";

import { Button, Dropdown, Space, message } from "antd";
import { FaEdit, FaTimesCircle } from "react-icons/fa";
import "./main.css";

const ProductInfo = ({ type, editFunc, deleteFunc }) => {
  return (
    <>
      <table className="table table-bordered table-striped">
        {type.length >= 1 && (
          <thead>
            <tr>
              <th className="tg-0lax"> Name</th>
              <th className="tg-0lax"> Price</th>
              <th className="tg-0lax"> Quantity</th>
              <th className="tg-0lax">
                <FaEdit /> <FaTimesCircle />
              </th>
            </tr>
          </thead>
        )}
        {type.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td className="tg-0lax">{item.name}</td>
              <td className="tg-0lax">{item.price} OMR</td>
              <td className="tg-0lax">{item.quantities}</td>
              <td className="tg-0lax">
                <Space wrap>
                  <Button onClick={() => editFunc(item)}>Edit</Button>
                  <Button onClick={() => deleteFunc(item)}>Delete</Button>
                </Space>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default ProductInfo;
