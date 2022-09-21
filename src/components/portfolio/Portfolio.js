import { useState, useEffect } from "react";
import axios from "axios";
const url = "http://localhost:8080/portfolio";
const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Portfolio</h2>

        {data.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={"http://localhost:8080" + project.image}
              className="project-img"
              alt="portfolio-image"
            />
            <a href={project.link} className="project-link">
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
