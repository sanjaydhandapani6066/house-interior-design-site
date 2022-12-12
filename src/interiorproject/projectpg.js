import React from "react";
import bedpic from './bed-common.png';
import hallpic from './hall-common.png';
import kitpic from './kitchen-common.png';
import './projectpg.css';
function Project()
{
    return(
        <>
        <div className="image-div">
        <div id='bar'>
            <ul>
            <li id='homebar'><a > HOME </a></li>
            <li ><a > PROJECTS </a></li>
            <li ><a > ABOUT US</a></li>
            <li ><a > CONTACT </a></li>
            </ul>
        </div>
            <div className="bedroom-text-div">
                BEDROOM INTERIOR
            </div>
            <div className="living-text-div">
                LIVINGROOM INTERIOR
            </div>
            <div className="modular-text-div">
                MODULAR KITCHEN
            </div>
            <img className="bed-img" alt="" src={bedpic} />
            <img className="living-img" alt="" src={hallpic} />
            <img className="kitchen-img" alt="" src={kitpic} />
            <div className="rectangle-div5"  />
            <div className="rectangle-div6" />
            <div className="rectangle-div7" />
            <div className="select-text1">
                SELECT
            </div>
            <div className="select-text2">
                SELECT
            </div>
            <div className="select-text3">
                SELECT
            </div>
            

        </div>



        </>
    )
}

export default Project;
