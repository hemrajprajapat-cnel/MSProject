import React from "react";
import { Link } from "react-router-dom";
import { FaSkype, FaTelegramPlane } from "react-icons/fa";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import "../css/picinformation.css";

// core components

function PicInformation() {

  return (
    <>
      <div className="section picinfo_container">
        <Container>
          <Row>
            <Col md="12 text-center heading">
              <h4>Help us to provide a better service experience by filling up your company info below.</h4>
              <p>*All important information will be sent to the provided company's email below.</p>
            </Col>
          </Row>
          <Row className="form_content">
            <Col md="4 inner inner_left">
              <h5>PIC Info</h5>
              <div class="form-group mt-2">
                <label>PIC Name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Company Email *</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input type="email" class="form-control" placeholder="admin@gmail.com" required="required" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>WeChat</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-comments"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat id: ilovemetasoft" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Skype</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FaSkype />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat id: ilovemetasoft" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Telegram</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FaTelegramPlane />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat 601888888888" />
                </div>
              </div>
              <div class="form-group mt-3">
                <label>Contact Preference</label>
                <select class="form-control">
                  <option selected>Choose contact method</option>
                  <option value="wechat">Wechat</option>
                  <option value="skype">Skype</option>
                  <option value="telegram">Telegram</option>
                </select>
              </div>
            </Col>
            <Col md="4 inner inner_center">
              <h5>Finance Info</h5>
              <div class="form-group mt-2">
                <label>PIC Name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Company Email *</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input type="email" class="form-control" placeholder="admin@gmail.com" required="required" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>WeChat</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-comments"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat id: ilovemetasoft" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Skype</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FaSkype />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat id: ilovemetasoft" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Telegram</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FaTelegramPlane />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat 601888888888" />
                </div>
              </div>
              <div class="form-group mt-3">
                <label>Contact Preference</label>
                <select class="form-control">
                  <option selected>Choose contact method</option>
                  <option value="wechat">Wechat</option>
                  <option value="skype">Skype</option>
                  <option value="telegram">Telegram</option>
                </select>
              </div>
            </Col>
            <Col md="4 inner inner_right">
              <h5>IT Lead Info</h5>
              <div class="form-group mt-2">
                <label>PIC Name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Company Email *</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input type="email" class="form-control" placeholder="admin@gmail.com" required="required" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>WeChat</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-comments"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat id: ilovemetasoft" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Skype</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FaSkype />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat id: ilovemetasoft" />
                </div>
              </div>
              <div class="form-group mt-2">
                <label>Telegram</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FaTelegramPlane />
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="E.g wechat 601888888888" />
                </div>
              </div>
              <div class="form-group mt-3">
                <label>Contact Preference</label>
                <select class="form-control">
                  <option selected>Choose contact method</option>
                  <option value="wechat">Wechat</option>
                  <option value="skype">Skype</option>
                  <option value="telegram">Telegram</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12 mt-3 text-center">
              <Link to="/transactionmethod"><Button type="submit" className="btn btn-md btn-primary picinfo_submit">Submit</Button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PicInformation;
