/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import * as CONSTANT from "../../BaseURL";
import "./banner.css";
import MYCASINO from "../../assets/img/my-casino-icon.svg"
import SLOT from "../../assets/img/slot-icon.svg"

function IndexHeader() {
  let pageHeader = React.createRef();

  let pathname = window.location.pathname;
  let path = pathname.replace("/", "");
  const [setpath, setpathname] = useState(path);

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
            backgroundImage: setpath == "MYCASINO" ? "url(" + require("assets/img/mycasino.jpg") + ")" : "url(" + require("assets/img/banner.jpg") + ")",
            backgroundPosition: setpath == "MYCASINO" ? "unset" : "center center",
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
                  <div className="lessCategory" style={{ background: category.code == setpath ? "#A71AE5" : "linear-gradient(to bottom, #0082ff, #0075fa, #0067f4, #0258ed, #1a49e5)" }}>
                    <div className="banner_description">
                      <img
                        alt="Image Not Found"
                        src={category.code == "MYCASINO" ? MYCASINO : SLOT}
                      />
                      <p style={{ color: category.code == setpath ? "#FFFFFF" : "#CEE7FF" }}>{category.name}</p>
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
