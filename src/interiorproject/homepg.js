import React from "react";
import './stylehome.css';
import logo1 from './logo1proj.png'
function Home(){
    return(
        <>
        <div id='bar'>
            <ul>
            <li id='homebar'><a > HOME </a></li>
            <li ><a > PROJECTS </a></li>
            <li ><a > ABOUT US</a></li>
            <li ><a > CONTACT </a></li>
            </ul>
        </div>
            <div >
                <h1 id='pname'>HOME SWEET HOME INTERIORS</h1><br/>
                <p id='para'>Interior designers & decorators in Coimbatore . <br/> We have top class designers to suggest luxury interior & exterior designs<br/> at an affordable budget .  </p>
        </div>
        <br/>
        <div>
        <button>OUR WORKS </button>
        </div>
        </>
    )
}
export default Home;                