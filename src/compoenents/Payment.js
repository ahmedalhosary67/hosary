import React from "react";
import { Button, Form } from "antd";
import AppSelect from "./AppSelect";
import { FaTimesCircle } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import AppInput from "./AppInput";
import "./Home.css";

export default function Payment({ closeModal, data, addItem }) {
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
      value: data && data.name,
      width: 6,
    },
    {
      name: "price",
      label: "Price - OMR",
      type: "number",
      required: true,
      value: data && data.price,
      width: 3,
    },
    {
      name: "quantities",
      label: "Quantities",
      type: "number",
      required: true,
      value: data && data.quantities,
      width: 3,
    },
  ];
  function onFinish(values) {
    values.id = Math.floor(Math.random() * 1000000);
    addItem(values);
    closeModal();
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
                          <FaTimesCircle />
                        </div>
                      </div>
                      <Form
                        layout="vertical"
                        name="control-ref"
                        onFinish={onFinish}
                      >
                        <Row>
                          {formSections2.map((x) => (
                            <Col key={x.name} md={x.width}>
                              <AppInput
                                name={x.name}
                                label={x.label}
                                type={x.type}
                                required={x.required}
                                value={x.value}
                              />
                            </Col>
                          ))}
                        </Row>
                        <AppSelect
                          name="type"
                          label="type"
                          data={productTypes}
                          value={data && data.type}
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
