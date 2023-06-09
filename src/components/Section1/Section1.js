


import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Section1.css'
import meter1 from '../../images/meter1.svg'
import meter2 from '../../images/meter2.svg'
import meter3 from '../../images/meter3.svg'



const Section1 = () =>{
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <setion className="skill1" id="skills" >
        <div className="container">
            <div className="row">
                <div className="col">
        
        <div className="skill-bx">
        <h2>Skills</h2>
        <p className='you-can'> You Can See My Skills Here</p>
        
        <Carousel responsive={responsive} infinite={true} className="skill-slider">
            <div className="item">
                <img src={meter1}/> 
                <h5>FullStack wep Developer</h5>
            </div>
        
            <div className="item">
                <img src={meter2}/> 
                <h5>FrontEnd Developer</h5>
            </div>
        
            <div className="item">
                <img src={meter3}/> 
                <h5>BackEnd Developer</h5>
            </div>
        
            <div className="item">
                <img src={meter3}/> 
                <h5>UX/UI Designer</h5>
            </div>

         </Carousel>
        </div>
        </div>
        
        
                </div>
            </div>
            {/* <img className="bg-image " src={colorsharp} /> */}
        </setion> 
    


</>

    )
}
export default Section1;