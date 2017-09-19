/**
 * Created by zyb on 2017/9/15.
 */


import React from 'react'
import { render } from 'react-dom'

class SwitchButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({ open: !this.state.open })
    }

    render() {
        let open = this.state.open,
            className = open ? 'switch-button open' : 'btn-switch'

        return (
            <label className={className} onClick={this.handleClick}>
                <input type="checkbox" checked={open}/>
            </label>
        )
    }
}

SwitchButton.defaultProps = {
    open: false
}

render(
    <SwitchButton />,
    document.getElementById('app')
)