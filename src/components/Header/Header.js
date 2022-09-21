import { useState, useEffect } from "react";
import axios from "axios";
import nav_close from "../../assets/images/icons/nav_close.svg"
import nav_open from "../../assets/images/icons/nav_open.svg"
const url = "http://localhost:8080/";
const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data[0]))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <header>
      <div className="container">
        <div className="header-nav">
          <div className="logo">
            <a href="/">{data.logo}</a>
          </div>
          <div className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <button className="nav-close" type="button">
                <img src={nav_close} alt="" />
              </button>
            </ul>
            <button className="nav-btn">
              <img src={nav_open} alt="" />
            </button>
          </div>
        </div>
        <div className="header-row">
          <div className="header-content">
            <h1 className="header-heading">
            {data.fullName} <br /> {data.job}
            </h1>
            <p>
            {data.description}
            </p>
          </div>
          <div className="header-img">
            <img src={"http://localhost:8080" + data.image} alt="hero" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
