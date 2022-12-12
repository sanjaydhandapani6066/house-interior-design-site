import React from "react";
import './login.css' ;
import logo1 from './logo1proj.png'
function Signup(){
    return(
        <>
        <div>
            <img class="l1" src={logo1} alt="Logo1" />
        </div>
        <div class='bgcl'>
        <div class= 'username'>
        <br/>E-MAIL   : <input type='text' placeholder="ENTER THE E-MAIL ID" /><br/><br/><br/>    
        <br/> USERNAME : <input type='text' placeholder="ENTER THE USERNAME" /><br/>    
        <br/><br/><br/> NEW PASSWORD  : <input type ='password' placeholder='PASSWORD'/><br/><br/><br/><br/>
        RE-ENTER PASSWORD  : <input type ='password' placeholder='PASSWORD'/><br/><br/><br/><br/>
        PH-NUMBER : <input type='number' placeholder="ENTER THE PHONE NUMBER" /><br/>    
        </div>
        <br/><br/><br/><button > SIGNUP </button><br/><br/>
        </div>
        </>
    )
}
export default Signup