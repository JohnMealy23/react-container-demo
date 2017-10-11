import React from 'react';

const Header = (props) => {
    const submitHandler = () => {
        props.addHeader(this.textInput.value);
        this.textInput.value = '';
    };
    return (
        <div>
            <h1>
                {props.header}
            </h1>
            <input
                type="text"
                ref={(input) => { this.textInput = input; }}
            />
            &nbsp;
            <button onClick={ submitHandler }>Add Header</button>
        </div>
    );
}

export default Header;