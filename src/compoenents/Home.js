import "./Home.css";
import React from "react";

import Payment from "./Payment.js";
import { FaPrint } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import "./Homeapp.js";
import ProductInfo from "./productInfo";
import { Checkbox, Input } from "antd";

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [formData, setFormData] = React.useState([]);
  const [itemData, setItemData] = React.useState();
  const [meals, setMeals] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [clothes, setClothes] = React.useState([]);

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
    openModel();
    // console.log(e);
    // clothName.value = x;
    // clothColor.value = y;
    // clothType.value = z;

    // let t = elem.parentNode.parentNode;
    // t.parentNode.removeChild(t);
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
                  <Checkbox
                    onChange={(e) => console.log(e.target.checked)}
                  >
                    Select All
                  </Checkbox>
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
              </tr>

              <tr id="total ">
                <th scope="row">
                  Total price <FaDollarSign />{" "}
                </th>
                <td>
                  <div className="total"></div>
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
        <Payment closeModal={closeModal} addItem={addItem} data={itemData} />
      )}
    </>
  );
}
