import React from 'react';

const Response = (props) => {
    return (
        <div>
            {props.data.text}
            &nbsp;
            <button onClick={ props.removeResponse }>Remove</button>
        </div>
    );
};

export default Response;