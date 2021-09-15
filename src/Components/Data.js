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
import Moment from "react-moment";
import "moment-timezone";
import "../Styles/Data.css";

const Data = ({ setFlip, city }) => {
  const { Title } = Typography;
  const [weatherData, setWeatherData] = useState({});
  const [weatherDay, setWeatherDay] = useState({});
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };

  const weatherDayFunc = async (city) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=779e161f73821a08f47c9c2fcbb897e1`
    );
    return data;
  };

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

  useEffect(async () => {
    const data2 = await weatherDayFunc(`${city}`);
    setWeatherDay(data2);
  }, [city]);

  console.log(`weatherDay`, weatherDay);
  
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          padding: "20px 20px 20px 20px",
          margin: "0px 20px 0px 20px",
          width: "80vw",
          backgroundColor: "#2D4B5D",
          
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <Col lg={8} md={8} sm={8} xs={8}  style={{ textAlign: "left" }}>
            <Button
              type="primary"
              ghost
              onClick={() => setFlip(false)}
              style={{ border: "hidden", outline: "hidden" }}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ alignItems: "left", color: "#F4FEFF", fontSize: "20px" }}
              />
            </Button>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
            <h2
            >{(`${weatherData?.name}, ${weatherData?.sys?.country}`).toUpperCase()}</h2>
          </Col>

          <Col lg={8} md={8} sm={8} xs={8}></Col>
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
            <h1>{`${(weatherData?.main?.temp - 273.15).toFixed(2)}°C`}</h1>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
            <h2>{`Wind: ${weatherData?.wind?.speed} mph`}</h2>
            <h2>{`Humidity: ${weatherData?.main?.humidity}`} </h2>
            <h2>{`Pressure: ${weatherData?.main?.pressure} mb`}</h2>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3>
              <Moment
                format="D MMM YYYY"
                withTitle
                interval={0}
                filter={toUpperCaseFilter}
                date={weatherDay?.list?.[2]?.dt_txt}
              />
            </h3>
            <br />
            <FontAwesomeIcon
              icon={faCloudShowersHeavy}
              style={{ fontSize: "40px", color:"#71ACF1" }}
            />
            <br />
            <br />
            <h3>{`${(weatherDay?.list?.[2]?.main?.temp - 273.15).toFixed(1)}°C`}</h3>
            <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3><Moment
                format="D MMM YYYY"
                withTitle
                interval={0}
                filter={toUpperCaseFilter}
                date={weatherDay?.list?.[10]?.dt_txt}
              /></h3>
            <br />
            <FontAwesomeIcon icon={faCloudSun} style={{ fontSize: "40px", color:"#71ACF1" }} />
            <br />
            <br />
            <h3>{`${(weatherDay?.list?.[10]?.main?.temp - 273.15).toFixed(1)}°C`}</h3>
            <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3><Moment
                format="D MMM YYYY"
                withTitle
                interval={0}
                filter={toUpperCaseFilter}
                date={weatherDay?.list?.[18]?.dt_txt}
              /></h3>
            <br />
            <FontAwesomeIcon
              icon={faCloudShowersHeavy}
              style={{ fontSize: "40px", color:"#71ACF1" }}
            />
            <br />
            <br />
            <h3>{`${(weatherDay?.list?.[18]?.main?.temp - 273.15).toFixed(1)}°C`}</h3> <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3><Moment
                format="D MMM YYYY"
                withTitle
                interval={0}
                filter={toUpperCaseFilter}
                date={weatherDay?.list?.[26]?.dt_txt}
              /></h3>
            <br />
            <FontAwesomeIcon icon={faCloudRain} style={{ fontSize: "40px", color:"#71ACF1" }} />
            <br />
            <br />
            <h3>{`${(weatherDay?.list?.[26]?.main?.temp - 273.15).toFixed(1)}°C`}</h3> <br />
            <br />
          </Col>
          <Col lg={4} md={8} sm={24} xs={24}>
            <h3><Moment
                format="D MMM YYYY"
                withTitle
                interval={0}
                filter={toUpperCaseFilter}
                date={weatherDay?.list?.[34]?.dt_txt}
              /></h3>
            <br />
            <FontAwesomeIcon icon={faCloud} style={{ fontSize: "40px", color:"#71ACF1", }} />
            <br />
            <br />
            <h3>{`${(weatherDay?.list?.[34]?.main?.temp - 273.15).toFixed(1)}°C`}</h3> <br />
            <br />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Data;
