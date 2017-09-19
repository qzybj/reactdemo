/**
 * Created by zyb on 2017/9/19.
 */
import React from 'react';

export default class Repo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{ this.props.params.repoName }</h2>
            </div>
        );
    }
}