import { useState, useEffect } from "react";
import axios from "axios";
const url = "http://localhost:8080/socials";
const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <footer>
      <h2 className="title">Contacts</h2>
      <p className="title-text">
        Want to know more or just chat? <br />
        You are welcome!
      </p>
      <a href="#" className="massage">
        Send massage
      </a>
      <div className="socials" id="contact">
        {data.map((social, index) => (
          <a href={social.link} className="social-link" key={index}>
            <img
              src={"http://localhost:8080" + social.image}
              alt={social.alt}
            />
          </a>
        ))}
      </div>
      <p className="socials-text">
        Like me on <br />
        {data.map((social, index) => (
          <code key={index}> {social.alt} </code>
        ))}
      </p>
    </footer>
  );
};

export default Footer;
