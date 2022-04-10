import React, { Fragment } from 'react'

const PrimaryButton = (props) => {

    const{text, type, onClickHandler} = props
    return (
        <Fragment>
            <button onClick={onClickHandler} className={type}>
                {text}
            </button>
        </Fragment>
    )
}

export default PrimaryButton
