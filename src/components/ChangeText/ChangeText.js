import React, { Component } from 'react'

class ChangeText extends Component {
    render() {
        return (
            <div className='changeText'>
                <input type='text' defaultValue={this.props.text} value={this.props.value} onBlur={this.props.handleChange} />
            </div>
        )
    }
}

export default ChangeText