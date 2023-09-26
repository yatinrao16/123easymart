import React from 'react'


function Alert(props) {

    
      return (
        <div style={{height:"4rem",zIndex:"1000"}} > 
        {props.alert && 
         <div className={`alert alert-${props.alert.type} `} role="alert" style={{height:"3rem",top:"4rem",width:"16rem",left:"35rem"}}>
            <div className= ''> <strong>{" "}<i class="fa fa-check"></i></strong> {props.alert.msg}</div>
          </div>}
          </div>
        
      );
    }
    
    export default Alert;
