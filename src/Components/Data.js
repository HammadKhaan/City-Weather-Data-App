import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { Col } from "antd";
import { Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faTemperatureHigh,
  faCloudRain,
  faCloudSun,
  faCloudShowersHeavy,
  faCloud,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import axios from "axios";

const Data = ({ setFlip, city }) => {
  const { Title } = Typography;
  const [weatherData, setWeatherData] = useState({});

  const weather = async (value) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=779e161f73821a08f47c9c2fcbb897e1`
    );

    return data;
  };
  useEffect(async () => {
    const data = await weather(`${city}`);
    setWeatherData(data);
  }, [city]);

  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          padding: "20px 20px 20px 20px",
          margin: "20px 20px 0px 20px",
          width: "maxContent",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <Col lg={8} md={8} sm={8} style={{ textAlign: "left" }}>
            <Button
              type="primary"
              ghost
              onClick={() => setFlip(false)}
              style={{ border: "hidden", outline: "hidden" }}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ alignItems: "left", color: "black", fontSize: "20px" }}
              />
            </Button>
          </Col>
          <Col lg={8} md={8} sm={8}>
            <Title level={4}>{`${weatherData?.name}, ${weatherData?.sys?.country}`}</Title>
          </Col>

          <Col lg={8} md={8} sm={8}></Col>
        </Row>
        <Row style={{ paddingTop: "60px" }}>
          <Col lg={8} md={8} sm={8} xs={8}>
            <FontAwesomeIcon
              icon={faSun}
              style={{ fontSize: "60px", color: "#FAAF02" }}
            />{" "}
            <h1>{weatherData?.weather?.[0]?.main}</h1>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
            <FontAwesomeIcon
              icon={faTemperatureHigh}
              style={{ fontSize: "60px" }}
            />
            <h1>{(weatherData?.main?.temp - 273.15).toFixed(2)}</h1>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
            <h2>{`Wind: ${weatherData?.wind?.speed} mph`}</h2>
            <h2>{`Humidity: ${weatherData?.main?.humidity}`} </h2>
            <h2>{`Pressure: ${weatherData?.main?.pressure} mb`}</h2>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3>SAT</h3>
            <br />
            <FontAwesomeIcon
              icon={faCloudShowersHeavy}
              style={{ fontSize: "40px" }}
            />
            <br />
            <br />
            <h3>20°C</h3>
            <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3>SUN</h3>
            <br />
            <FontAwesomeIcon icon={faCloudSun} style={{ fontSize: "40px" }} />
            <br />
            <br />
            <h3>20°C</h3>
            <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3>MON</h3>
            <br />
            <FontAwesomeIcon
              icon={faCloudShowersHeavy}
              style={{ fontSize: "40px" }}
            />
            <br />
            <br />
            <h3>22°C</h3> <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3>TUE</h3>
            <br />
            <FontAwesomeIcon icon={faCloudRain} style={{ fontSize: "40px" }} />
            <br />
            <br />
            <h3>23°C</h3> <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3>WED</h3>
            <br />
            <FontAwesomeIcon icon={faCloud} style={{ fontSize: "40px" }} />
            <br />
            <br />
            <h3>18°C</h3> <br />
            <br />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Data;
