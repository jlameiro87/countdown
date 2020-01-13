import React from 'react';

function Field(props) {
    return (
        <div className="col-sm-2">
            <div className="form-group">
                <div className="form-line">
                    <input
                        name={props.name}
                        type="number"
                        className="form-control"
                        placeholder="00"
                        min="00"
                        max={props.maxValue}
                        value={props.value}
                        onChange={props.valueChange}
                        disabled={props.disabled}
                    />
                </div>
            </div>
        </div>
    );
}

export default Field;