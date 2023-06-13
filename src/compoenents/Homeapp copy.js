// const { createRoot } = ReactDOM;
// const {  DownOutlined, UserOutlined  } = icons;
// const {  Button, Dropdown, Space, Tooltip, message  } = antd;
// const handleMenuClick = (e) => {
//   message.info('Click on menu item.');
//   console.log('click', e);
// };
// const items = [
//   {
//     label: '1st menu item',
//     key: '1',
//     icon: <UserOutlined />,
//   },
//   {
//     label: '2nd menu item',
//     key: '2',
//     icon: <UserOutlined />,
//   },
//   {
//     label: '3rd menu item',
//     key: '3',
//     icon: <UserOutlined />,
//     danger: true,
//   },
//   {
//     label: '4rd menu item',
//     key: '4',
//     icon: <UserOutlined />,
//     danger: true,
//     disabled: true,
//   },
// ];
// const menuProps = {
//   items,
//   onClick: handleMenuClick,
// };
// const App = () => (
//   <Space wrap>
//     <Dropdown menu={menuProps}>
//       <Button>
//         <Space>
//           Button
//           <DownOutlined />
//         </Space>
//       </Button>
//     </Dropdown>
 
//   </Space>
// );



import "./Home.css";
import React, { useState } from "react";

import Payment from "./Payment.js";
import { FaPrint } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import "./Homeapp.js";
import ProductInfo from "./productInfo";
import { Checkbox, Input } from "antd";
import AppInput from "./AppInput";
import AppXX from "./Homeapp.js";

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [formData, setFormData] = React.useState([]);
  const [itemData, setItemData] = React.useState();
  const [meals, setMeals] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [clothes, setClothes] = React.useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function totalMeals(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i].price);
    }
    return sum;
  }
  totalMeals();
  function totalAllPrice() {
    let sum = 0;
    sum += totalMeals(meals) + totalMeals(drinks) + totalMeals(clothes);
    // setTotalPrice(sum)

    console.log(sum);
  }

  const print = () => {
    console.log("ok");
  };
  const openModel = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  function addItem(formData) {
    console.log(formData.type);
    formData.type === "meals"
      ? meals.push(formData)
      : formData.type === "drinks"
      ? drinks.push(formData)
      : clothes.push(formData);
  }
  function editFunc(item) {
    setItemData(item);
    console.log(itemData);
    openModel();
    <AppInput
      name={"x.name"}
      label={"x.label"}
      type={"x.type"}
      required={"x.required"}
      value={"x.value"}
      item={"55"}
    />;
    // console.log(e);
    // clothName.value = x;
    // clothColor.value = y;
    // clothType.value = z;

    // let t = elem.parentNode.parentNode;
    // t.parentNode.removeChild(t);
  }

  function checkAll(e) {
    let chec = document.querySelectorAll(".u");
    for (let i = 0; i < chec.length; i++) {
      chec[i].checked = e.target.checked;
    }
  }

  function deleteFunc(item) {
    console.log(item.type);
    setMeals(meals.filter((el) => el.id != item.id));
    setDrinks(drinks.filter((el) => el.id != item.id));
    setClothes(clothes.filter((el) => el.id != item.id));
  }

  return (
    <>
      <div className="collect-parts col-12 col-sm-10 col-lg-10 col-xl-8">
        <section className="explain">
          <br /> <br />
          <div className="welcome">
            <h1>
              Welcome <FaRegHeart />{" "}
            </h1>
          </div>
          <div className="usage">
            <p>Use this table to add product and print payment </p>
          </div>
        </section>
        <section className="cat-table">
          <table className="table table-bordered table-striped" id="example">
            <thead style={{ backgroundColor: "#717a84", color: "#fff" }}>
              <tr>
                <th style={{ verticalAlign: "middle" }} scope="col">
                  Category
                </th>
                <th scope="col">
                  <button className="btn" onClick={openModel}>
                    <FaPlusSquare /> Add Item
                  </button>
                </th>
                <th scope="col">
                  <Checkbox onClick={checkAll}>Select All</Checkbox>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr id="meals">
                <th scope="row">
                  Meals <FaPrint onClick={print} />{" "}
                </th>
                <td>
                  <div className="meals">
                    <ProductInfo
                      editFunc={editFunc}
                      deleteFunc={deleteFunc}
                      type={meals}
                    />
                  </div>
                </td>
                <td>
                  <input
                    id="u"
                    type="checkbox"
                    className="custom-control-input u checkbox-input"
                  />
                </td>
              </tr>
              <tr id="drinks">
                <th scope="row">
                  Drinks <FaPrint onClick={print} />
                </th>

                <td>
                  <div className="drinks">
                    <ProductInfo
                      editFunc={editFunc}
                      deleteFunc={deleteFunc}
                      type={drinks}
                    />
                  </div>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="custom-control-input u checkbox-input"
                  />
                </td>
              </tr>
              <tr id="clothes">
                <th scope="row">
                  Clothes <FaPrint onClick={print} />
                </th>
                <td>
                  <div className="clothes">
                    <ProductInfo
                      editFunc={editFunc}
                      deleteFunc={deleteFunc}
                      type={clothes}
                    />
                  </div>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="custom-control-input u checkbox-input"
                  />
                </td>
              </tr>

              <tr id="total ">
                <th scope="row">
                  Total price <FaDollarSign />{" "}
                </th>
                <td>
                  <div className="total">{totalPrice}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="export-pdf">
          <button
            className="export-pdf-button btn"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            // onclick="takeshot()"
          >
            Print all payment
          </button>
        </section>
      </div>

      {show && (
        <Payment
          closeModal={closeModal}
          addItem={addItem}
          data={itemData}
          totalAllPrice={totalAllPrice}
        />
      )}

      {/* <AppXX /> */}
    </>
  );
}
