import React from "react";
import './login.css' ;
import logo1 from './logo1proj.png'

function Login(){
    return(
        <>
        <div>
            <img class="l1" src={logo1} alt="Logo1" />
        </div>
        <div class='bgcl'>
        <div class= 'username'>
        <br/>
        USERNAME : <input type='text' placeholder="ENTER THE USERNAME" /><br/>    
        <br/><br/><br/>PASSWORD  : <input type ='password' placeholder='PASSWORD'/><br/><br/><br/><br/>
        <a> forget password?</a><br/><br/>
        <button > LOGIN </button><br/><br/>
        <a>If new,Sign up!</a>
        <br/>
        <a> </a>
        <br/>
        </div>
        </div>
        </>
    )
}
export default Login