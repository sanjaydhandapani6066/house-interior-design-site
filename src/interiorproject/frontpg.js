import React from "react";
import './style1.css' ;

import logo1 from './logo1proj.png'
import logo2 from './logo2proj.png'

function Getstarted(){
    return(
<>

        <div><br/><br/><br/>
            <h1>HOME SWEET HOME INTERIOR</h1>
            <h3>get started with our best interiors</h3>
        </div>
        
        <div>
            <img class="l1" src={logo1} alt="Logo1" />
        </div>
        <div>
            <img class="l2" src={logo2} alt="Logo2" />
        </div>
            <button>GET STARTED</button>
        </>
    );
}

export default Getstarted;