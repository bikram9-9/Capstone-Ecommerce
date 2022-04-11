import React, { Fragment } from 'react';
import "./input-field.styles.scss";

const InputField = (props) => {

    const {label, name, type, placeholder, onChangeHandler} = props;
    return (
        <Fragment>
            <label className="label" >
                {label}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="inputField"
                    onChange={onChangeHandler}
                />
            </label>
        </Fragment>
    )
}

export default InputField
