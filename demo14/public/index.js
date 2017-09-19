/**
 * Created by zyb on 2017/9/18.
 */

import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router} from "react-router";
import routes from "../modules/routes";

ReactDOM.render(
     <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app'));

