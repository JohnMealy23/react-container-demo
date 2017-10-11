import React from 'react';

const ResponseForm = (props) => {
    const submitHandler = () => {
        props.addResponse(this.textInput.value);
        this.textInput.value = '';
    };
    return (
        <div style={{
            margin: '10px'
        }}>
            <input
                type="text"
                ref={(input) => { this.textInput = input; }}
            />
            &nbsp;
            <button onClick={ submitHandler }>Add Response</button>
        </div>
    );
};

export default ResponseForm;