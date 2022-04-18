import React, { Fragment } from 'react';
import "./input-field.styles.scss";

const InputField = (props) => {

    const {label, name, type, placeholder, onChangeHandler,autocomplete} = props;
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
                    autoComplete={autocomplete}
                />
            </label>
        </Fragment>
    )
}

export default InputField
