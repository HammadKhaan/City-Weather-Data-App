import React from "react";
import { Card, Col, Row } from "antd";
import { Input } from "antd";
import { Button } from "antd";

const CityName = ({setFlip, setCity}) => {
  return (
    <div className="site-card-wrapper">
      <Row
        justify="center"
        style={{ padding: "20px 20px 20px 20px", alignItems: "center" }}
      >
        <Col lg={10} md={10} sm={24} xs={24}>
          <Card
            title="Enter City Name"
            bordered={true}
            style={{ border: "2px solid black" }}

          >
            <Input placeholder="" style={{ border: "2px solid black" }} onChange={(e)=>setCity(e.target.value)}/>
            <Button type="primary" style={{ marginTop: "20px" }} onClick={()=>setFlip(true)}>
              Show Weather
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CityName;
