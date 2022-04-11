import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './primary-button.styles.scss'

const PrimaryButton = (props) => {

    const{text, type, redirectTo} = props
    return (
        <Fragment>
           <Link className="button" to={redirectTo}>{text}</Link>
        </Fragment>
    )
}

export default PrimaryButton
