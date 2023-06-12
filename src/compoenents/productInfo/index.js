import React from "react";

import "./main.css";

import { Button, Dropdown, Space, message } from "antd";
// import { DownOutlined, UserOutlined } from "icons";


import { FaEdit } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

// const { DownOutlined, UserOutlined } = icons;
// const { Button, Dropdown, Space, message } = antd;
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'edit',
    key: '1',
  },
  {
    label: 'delete',
    key: '2',
  },

];
const menuProps = {
  items,
  onClick: handleMenuClick,
};



const ProductInfo = ({ item, editFunc, deleteFunc }) => {
  return (
    <>
      <span className="task-box dropright">
      
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th class="tg-0lax"> Name</th>
                <th class="tg-0lax"> Price</th>
                <th class="tg-0lax"> Quantity</th>
                <th class="tg-0lax"> <FaEdit/>  <FaTimesCircle/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-0lax">{item.name}</td>
                <td class="tg-0lax">{item.price} OMR</td>
                <td class="tg-0lax">{item.quantities}</td>
                <td class="tg-0lax">  <Space wrap>
                  <Dropdown menu={menuProps}>
                    <Button>
                      <Space>
                        change
                      </Space>
                    </Button>
                  </Dropdown>
                </Space>
                </td>
              </tr>
            </tbody>
          </table>
      
        <br />
      </span>
    </>
  );
};

export default ProductInfo;
