import { useState, useEffect } from "react";
import axios from "axios";
const url = "http://localhost:8080/services";
const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div className="container">
      <div className="services" id="services">
        {data.map((service, index) => (
          <div key={index} className="card">
            <img
              src={"http://localhost:8080" + service.image}
              className="card-img"
              alt={service.title}
            />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-text">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
