import React from 'react';
import ReactDom from "react-dom";




export default function Modal({onClose,children}) {
  return (

    <>
    {
        ReactDom.createPortal(<>
        <div>{children}</div>
        </>,    document.getElementById("modal-root")
        )
}
</>
   
   

  )
}
