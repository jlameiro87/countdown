import React from 'react';
import OperationButton from './OperationButton';

function Operations(props) {
    return (
        <div>
            <OperationButton
                text="START"
                classes={'btn bg-red waves-effect'}
                btnClick={props.startCountdown}
            />

            <OperationButton
                text="RESET"
                classes={'btn bg-grey waves-effect'}
                btnClick={props.resetCountdown}
            />

            <OperationButton
                text="STOP"
                classes={'btn bg-brown waves-effect'}
                btnClick={props.stopCountdown}
            />
        </div>
    );
}

export default Operations;