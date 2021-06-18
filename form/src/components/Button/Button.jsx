import React from 'react'
import "./Button.css"

const Button = ({classes,btnContent,onclick}) => {
    return (
        <div className="Wrapper">
            <button className={`mybtn ${classes}`} onClick={onclick}>{btnContent}</button>
        </div>
    )
}

export default Button
