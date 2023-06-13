import "./Home.css";
import React, { useEffect, useRef, useState } from "react";

import Payment from "./Payment.js";
import { FaPrint } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import "./Homeapp.js";
import ProductInfo from "./productInfo";
import { Checkbox, Input, message } from "antd";
import AppInput from "./AppInput";
import AppXX from "./Homeapp.js";
import { useReactToPrint } from "react-to-print";

// const categories = {
//   meals: [],

// }

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [itemData, setItemData] = React.useState();
  // const [meals, setMeals] = React.useState([]);
  // const [drinks, setDrinks] = React.useState([]);
  // const [clothes, setClothes] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  function totalMeals(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      sum += (Number(arr[i].price) * Number(arr[i].quantities));
    }
    return sum;
  }

  function totalAllPrice() {
    let sum = 0;
    sum += totalMeals(categories);
    // sum += totalMeals(meals) + totalMeals(drinks) + totalMeals(clothes);
    console.log(sum);
    return sum;
  }
  let totalPrice = totalAllPrice();
  //  totalMeals()

  //-----Mohamed elsayed-----//
  const [selection, setSelection] = useState({
    all: false,
    meals: false,
    drinks: false,
    clothes: false,
  });

  const tableRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();

  const print = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "genertaed.pdf",
    onAfterPrint: () => messageApi.success("Printed successfully!"),
  });

  //------------------------//
  const openModel = () => {
    setShow(true);
  };

  const closeModal = () => {
    setItemData();
    setShow(false);
  };

  function addItem(formData) {
    categories.push(formData)
  }

  function editItem(formData) {
    const index = categories.findIndex((ele) => ele.id === itemData.id)
    categories[index] = formData
    setCategories(categories)
  }
  

  function editFunc(item) {
    setItemData(item);
    openModel();
  }

  //mohamed elsayed//
  function checkAll(e) {
    setSelection((prev) => {
      return { ...prev, all: !prev.all };
    });
  }

  function deleteFunc(item) {
    setCategories(categories.filter((el) => el.id != item.id))
  }

  useEffect(() => {
    totalAllPrice();
  }, []);

  return (
    <>
      {/* mohamed elsayed */}
      {contextHolder}
      {/*-----------------*/}
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
          <table
            className="table table-bordered table-striped"
            id="example"
            ref={tableRef}
          >
            <thead style={{ backgroundColor: "#717a84", color: "#fff" }}>
              <tr>
                <th style={{ verticalAlign: "middle" }} scope="col">
                  Category
                </th>
                <th scope="col">
                  <button className="btn no-print" onClick={openModel}>
                    <FaPlusSquare /> Add Item
                  </button>
                </th>
                <th scope="col" className="no-print">
                  <Checkbox onClick={checkAll} checked={selection.all}>
                    Select All
                  </Checkbox>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                id="meals"
                // mohamed elsayed
                className={
                  selection.all ? "" : selection.meals ? "" : "no-print"
                }
              >
                <th scope="row">
                  Meals <FaPrint onClick={print} />{" "}
                </th>
                <td>
                  <div className="meals">
                    <ProductInfo
                      editFunc={editFunc}
                      deleteFunc={deleteFunc}
                      type={"meals"}
                      categories={categories}
                    />
                  </div>
                </td>
                <td className="no-print">
                  <input
                    type="checkbox"
                    className="custom-control-input u checkbox-input"
                    // mohamed elsayed
                    onChange={() =>
                      setSelection((prev) => {
                        return { ...prev, meals: !prev.meals };
                      })
                    }
                    checked={
                      selection.all ? true : selection.meals ? true : false
                    }
                  />
                </td>
              </tr>
              <tr
                id="drinks"
                // mohamed elsayed
                className={
                  selection.all ? "" : selection.drinks ? "" : "no-print"
                }
              >
                <th scope="row">
                  Drinks <FaPrint onClick={print} />
                </th>

                <td>
                  <div className="drinks">
                    <ProductInfo
                      editFunc={editFunc}
                      deleteFunc={deleteFunc}
                      type={"drinks"}
                      categories={categories}
                    />
                  </div>
                </td>
                <td className="no-print">
                  <input
                    type="checkbox"
                    className="custom-control-input u checkbox-input"
                    // mohamed elsayed
                    onChange={() =>
                      setSelection((prev) => {
                        return { ...prev, drinks: !prev.drinks };
                      })
                    }
                    checked={
                      selection.all ? true : selection.drinks ? true : false
                    }
                  />
                </td>
              </tr>
              <tr
                id="clothes"
                // mohamed elsayed
                className={
                  selection.all ? "" : selection.clothes ? "" : "no-print"
                }
              >
                <th scope="row">
                  Clothes <FaPrint onClick={print} />
                </th>
                <td>
                  <div className="clothes">
                    <ProductInfo
                      editFunc={editFunc}
                      deleteFunc={deleteFunc}
                      type={"clothes"}
                      categories={categories}
                    />
                  </div>
                </td>
                <td className="no-print">
                  <input
                    type="checkbox"
                    className="custom-control-input u checkbox-input"
                    // mohamed elsayed
                    onChange={() =>
                      setSelection((prev) => {
                        return { ...prev, clothes: !prev.clothes };
                      })
                    }
                    checked={
                      selection.all ? true : selection.clothes ? true : false
                    }
                  />
                </td>
              </tr>

              <tr id="total ">
                <th scope="row">
                  Total price <FaDollarSign />{" "}
                </th>
                <td>
                  {totalPrice > 0 && (
                    <div className="total">{totalPrice} OMR</div>
                  )}
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
            onClick={print}
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
          editItem={editItem}
        />
      )}

      {/* <AppXX /> */}
    </>
  );
}
