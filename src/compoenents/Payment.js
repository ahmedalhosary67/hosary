import React from "react";
import "./Home.css";
import { Button, Form } from "antd";
import AppSelect from "./AppSelect";
// import './Homeapp.js';
// import "antd/dist/antd.css";
import { Col, Row } from "react-bootstrap";
import AppInput from "./AppInput";

const productTypes = [
  { key: "meals", name: "meals" },
  { key: "drinks", name: "drinks" },
  { key: "clothes", name: "clothes" },
];
const formSections2 = [
  {
    name: "name",
    label: "Product Name",
    required: true,
    width: 6,
  },
  {
    name: "price",
    label: "Price - OMR",
    type: "number",
    required: true,
    width: 3,
  },
  {
    name: "quantities",
    label: "Quantities",
    type: "number",
    required: true,
    width: 3,
  },
];
export default function Payment({ closeModal,data, setData, addItem }) {
  function onFinish(values) {
    addItem(values)
    closeModal()
  }
  return (
    <>
      <div id="custom-model-main" className="custom-model-main model-open">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="custom-model-inner">
                <div className="custom-model-wrap">
                  <div className="pop-up-content-wrap">
                    <div className="items">
                      <div className="adding row">
                        <div className="add col-6">Add Item</div>
                        <div className="close col-6" onClick={closeModal}>
                          ×
                        </div>
                      </div>
                      <Form
                        layout="vertical"
                        name="control-ref"
                        onFinish={onFinish}
                      >
                        <Row>
                          {formSections2.map((x) =>(
                              <Col key={x.name} md={x.width}>
                                <AppInput
                                  name={x.name}
                                  label={x.label}
                                  type={x.type}
                                  required={x.required}
                                />
                              </Col>
                            )
                          )}
                        </Row>
                        <AppSelect
                          name="type"
                          label="type"
                          data={productTypes}
                        />
                        <Form.Item>
                          <Button type="primary" htmlType="submit">
                            Add to payment
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-overlay" onClick={closeModal} />
      </div>
    </>
  );
}
