import React from "react"
import './Section2.css'
import { useNavigate } from "react-router-dom"
import FrSection from "./FrSection/FrSection"
// import FrSection from "./FrSection/FrSection"
// import Section1 from "../Section1/Section1"
const Section2 = () =>{
    const x = useNavigate()
    return(
 
        <>
 
        <div className='my-project pb-5' id="projecte">

            <div className='my-project-title px-5 pt-5 pb-3'>
                <h2> My Project</h2>
                <p>My name is fatma,i live in cairo. this is the project in react nev</p>
            </div>
        <div className='container' defaultActiveKey="first" >
            <div className='section  row justify-content-around  col-md-6 col-sm-12'>


  <div  onClick={() => x("/frsection")} className=' section-item section-item1 col-4 ' eventKey="first" > 1st Section</div>

  <div  onClick={() => x("/secsection")} className=' section-item section-item2 border border-top-0 border-bottom-0 col-4' eventKey="second">2nd Section</div>
  <div  onClick={() => x("/thsection")} className=' section-item section-item3 col-4' eventKey="third">3rd Section</div>
            </div>
        </div>
        
        </div>



        </>

    )
}
export default Section2