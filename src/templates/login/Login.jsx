import React from "react";
import PropTypes from "prop-types";
import {Control} from "../../atoms/Input"
import {Button} from "../../atoms/Button"

const COLOR = {
    primary: 'primary',
    secondary: 'secondary',
    warning: 'warning',
    danger: 'danger',
    success: 'success',
    info: 'info',
}

export const Login = (props) => {
    const { children, className, color } = props;

    return (
        <div className={`${className}`}>
            <Control type="email" placeholder="Email address or username" className="mb-3" />
            <Control type="password" placeholder="Password" className="mb-3" />
            <Button varient="solid" size="small" color="primary" label="Sign In" className="w-full mb-3"/>
        </div>
    );
}