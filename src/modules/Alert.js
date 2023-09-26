import React from 'react'


function Alert(props) {

    // const capitalised=(word)=>{
    //     if(word==="danger"){
    //         word= "error"
    //     }
    //     let cap = word.charAt(0).toUpperCase();
    //     return cap + word.slice(1);
    // }
    
      return (
        <div style={{height:"2rem",zIndex:"101"}} > 
        {props.alert && 
         <div className={`alert alert-${props.alert.type} `} role="alert" style={{height:"4rem",top:"3rem",width:"16rem",left:"35rem"}}>
            <div className='mt-3 '> <strong>{" "}<i class="fa fa-check"></i></strong> {props.alert.msg}</div>
          </div>}
          </div>
        
      );
    }
    
    export default Alert;