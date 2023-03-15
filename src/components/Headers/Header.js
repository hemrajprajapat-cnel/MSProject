/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import * as CONSTANT from "../../BaseURL";
import "./banner.css";

function IndexHeader() {
  let pageHeader = React.createRef();

  const [category, setCategory] = useState([]);
  const [categoryClass, setCategoryClass] = useState();

  // category api
  useEffect(() => {
    fetch(`${CONSTANT.BaseUrl}get-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setCategory(json.CATEGORY);
        if (json.CATEGORY.length < 4) {
          setCategoryClass("banner_content2");
        } else {
          setCategoryClass("banner_content");
        }
      });
  }, []);

  return (
    <>
      <div className="page-header clear-filter mb-3" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/banner.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand banner_heading">
            <h1>GAME LOBBY</h1>
          </div>

          <div className={categoryClass}>
            {category.map((category) => {
              return (
                <Link to={category.code}>
                  <div className="lessCategory">
                    <div className="banner_description">
                      <i class="fa fa-building"></i>
                      <p>{category.name}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
