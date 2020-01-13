import React from 'react';

function OperationButton(props) {
    return (
        <button
            type="button"
            className={props.classes}
            onClick={props.btnClick}>
            {props.text}
        </button>
    );
}

export default OperationButton;