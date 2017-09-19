import React from "react";
import NavLink from "./NavLink";
import {IndexLink} from "react-router";

// 增加 this.props.children 用来渲染子组件
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    {/* add here */}
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
