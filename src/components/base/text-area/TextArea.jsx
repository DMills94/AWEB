import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Styles
import '../Inputs.scss'

class TextArea extends Component {
    state = {
        focused: false
    }

    onFocus = () => {
        this.setState({
            focused: true
        })
    }

    onBlur = () => {
        this.setState({
            focused: false
        })
    }

    clickInput = () => {
        this.textArea.focus()
    }

    render() {
        const labelContent = this.props.value === ''
            ? ''
            : ' content'

        const focused = this.state.focused
            ? ' focus'
            : ''

        return (
            <div className='input-wrap'>
                <label
                    className={'label' + labelContent + focused}
                    onClick={() => this.clickInput()}
                >
                    {this.props.label}
                </label>
                <textarea
                    ref={input => {this.textArea = input}}
                    onChange={e => this.props.handleChange(e)}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                    type='text'
                    name={this.props.name}
                    value={this.props.value}
                    className={focused}
                />
            </div>
        )
    }
}

export default TextArea