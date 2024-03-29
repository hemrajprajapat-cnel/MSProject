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
import Slot from "views/sections/Slots.js";
import Gameprovider from "views/sections/GameProvider.js";
import EvolutionList from "views/sections/ProviderList.js";
import Showmore from "views/sections/ShowMoreGames.js";

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
          path="/SLOT"
          render={(props) => <Slot {...props} />}
        />
        <Route
          path="/gameprovider"
          render={(props) => <Gameprovider {...props} />}
        />
        <Route
          path="/providerList"
          render={(props) => <EvolutionList {...props} />}
        />
         <Route 
          path="/showmore" 
          render={(props) => <Showmore {...props} />} 
        />
        <Redirect to="/captcha" />
        <Redirect from="/" to="/captcha" />
      </Switch>
    </Switch>
  </BrowserRouter>
);

