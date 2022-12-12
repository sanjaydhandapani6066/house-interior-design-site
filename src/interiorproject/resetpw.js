import React from "react";
import './login.css' ;
import logo1 from './logo1proj.png'
function Resetpw(){
    return(
        <>
        <div>
            <img class="l1" src={logo1} alt="Logo1" />
        </div>
        <div class='bgcl'>
        <div class= 'username'>
        <br/>E-MAIL CODE: <input type='text' placeholder="ENTER THE CODE SENT TO MAIL ID" /><br/> 
        <br/><br/><br/> NEW PASSWORD  : <input type ='password' placeholder='PASSWORD'/><br/><br/><br/><br/>
        RE-ENTER PASSWORD  : <input type ='password' placeholder='PASSWORD'/><br/><br/><br/><br/>
        </div>
        <br/><br/><button > RESET PASSWORD </button><br/><br/>
        </div>
        </>
    )
}
export default Resetpw