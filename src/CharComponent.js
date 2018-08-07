import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div className="charComponent" onClick={props.click}>
    <p>{props.content}</p>
    </div>
  )

}

export default charComponent;
