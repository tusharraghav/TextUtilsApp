import React from 'react'

function Alert(props) {

    // Captilalize function
    const captilalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type}
            alert-dismissible fade show`} role="alert">
                <strong>{captilalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert