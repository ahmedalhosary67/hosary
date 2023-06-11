import "./Home.css";
import React from "react";

import Payment from "./Payment.js";

import "./Homeapp.js";
import ProductInfo from "./productInfo";

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [formData, setFormData] = React.useState([]);
  const [meals, setMeals] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [clothes, setClothes] = React.useState([]);

  const openModel = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  function addItem(formData) {
    console.log(formData.type);
    formData.type == "meals"
      ? meals.push(formData)
      : formData.type == "drinks"
      ? drinks.push(formData)
      : clothes.push(formData);
  }
  function editFunc(e, x, y, z, type) {
    openModel(type);
  console.log(e);
    // clothName.value = x;
    // clothColor.value = y;
    // clothType.value = z;
  
    // let t = elem.parentNode.parentNode;
    // t.parentNode.removeChild(t);
  }

  return (
    <>
      <div className="collect-parts col-12 col-sm-10 col-lg-10 col-xl-8">
        <section className="explain">
          <div className="welcome">
            <h1>Welcome!</h1>
          </div>
          <div className="usage">
            <p>Use this table to organize your cabinet</p>
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
                    + Item
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr id="meals">
                <th scope="row">Meals</th>
                <td>
                  <div className="meals">
                    {meals.map((item) => (
                      <ProductInfo editFunc={editFunc} item={item} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr id="drinks">
                <th scope="row">Drinks</th>
                <td>
                  <div className="drinks">
                    {drinks.map((item) => (
                      <ProductInfo editFunc={editFunc} item={item} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr id="clothes">
                <th scope="row">Clothes</th>
                <td>
                  <div className="clothes">
                    {clothes.map((item) => (
                      <ProductInfo editFunc={editFunc} item={item} />
                    ))}
                  </div>
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
            Print
          </button>
        </section>
      </div>

      {show && <Payment closeModal={closeModal} addItem={addItem} />}
    </>
  );
}
