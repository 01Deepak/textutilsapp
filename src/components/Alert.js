import React from 'react'

function Alert(props) {

  const CapitlizeFirstLetter=(word)=>{
   const lower=word.toLowerCase();
   return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

    return (
        props.Alert  && <div className={`alert alert-${props.Alert.msgtype} alert-dismissible fade show`} role="alert">
        <strong>{CapitlizeFirstLetter(props.Alert.msgtype)}</strong> : {props.Alert.msg}
        
      </div>
    )
}

export default Alert
