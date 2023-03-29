/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// pages for this kit
import Home from "views/Home.js";
import Captcha from "views/sections/auth/Captcha.js";
import Register from "views/sections/auth/Register.js";
import Login from "views/sections/auth/Login.js";
import PicInformation from "views/sections/auth/PicInformation.js";
import Transactionmethod from "views/sections/auth/Transactionmethod.js";
import Provider from "views/sections/auth/Provider.js";
import ForgotPassword from "views/sections/auth/forgotpassword.js";
import Slot from "views/sections/Slots.js";
import EvolutionList from "views/sections/ProviderList.js";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route 
          path="/MYCASINO" 
          render={(props) => <Home {...props} />} 
        />
        <Route
          path="/captcha"
          render={(props) => <Captcha {...props} />}
        />
        <Route
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/picinformation"
          render={(props) => <PicInformation {...props} />}
        />
        <Route
          path="/transactionmethod"
          render={(props) => <Transactionmethod {...props} />}
        />
        <Route
          path="/provider"
          render={(props) => <Provider {...props} />}
        />
        <Route
          path="/forgotpassword"
          render={(props) => <ForgotPassword {...props} />}
        />
        <Route
          path="/SLOT"
          render={(props) => <Slot {...props} />}
        />
        <Route
          path="/providerList"
          render={(props) => <EvolutionList {...props} />}
        />
        <Redirect to="/captcha" />
        <Redirect from="/" to="/captcha" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
