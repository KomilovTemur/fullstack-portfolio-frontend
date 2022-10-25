import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState();
  const url = "http://localhost:8080/portfolio";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  console.log(data);
  return (
    <div className="container" id="admin">
      <h2 className="my-5 text-center">Add new project</h2>
      <form method="post" className="d-flex flex-column">
        <input
          className="form-control mb-1"
          name="projectName"
          type="text"
          placeholder="project name"
        />
        <input
          className="form-control my-1"
          name="projectLink"
          type="text"
          placeholder="project link"
        />
        <input className="form-control my-1" name="projectImage" type="file" />
        <button className="btn btn-success my-1" type="submit">
          Add new Project
        </button>
      </form>
      <h2 className="my-5 text-center">Projects</h2>
      <div className="row">
        {data?.map((item, index) => (
          <div className="col-md-4">
            <div className="card overflow-hidden" key={index}>
              <img alt="img" src={"http://localhost:8080/" + item.image} />
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a href={item.link} className="text-dark" target="blank">
                  {item.linkText}
                </a>
                <a href={item.id} className="text-dark" target="blank">
                  <i class="fa-solid fa-pen"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
