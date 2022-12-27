import React from 'react'
//* Shortform is rfc

export default function Alert(props) {
    //First capitalized function

    const capitalized = (word) => {
        let lwr = word.toLowerCase();
        return lwr.charAt(0).toUpperCase() + lwr.slice(1);
    }
    return (
        props.alert &&  <div style={{transition:".5s ease-in-out"}}>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalized(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>
    )
}
