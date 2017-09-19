/**
 * Created by zyb on 2017/9/19.
 */
// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link {...this.props} activeClassName="active"/>
        );
    }
}