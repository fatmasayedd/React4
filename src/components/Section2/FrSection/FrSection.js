import './FrSection.css'
import React from "react"
import img1 from '../../../images/project-img1.png'
import img2 from '../../../images/project-img2.png'
import img3 from '../../../images/project-img3.png'
import SecSection from '../SecSection/SecSection'
const FrSection = () =>{
    return(
 
        <>
       
        <div className='my-project-frist-back '>
        <div className='my-project-frist container row  pt-4 pb-5'>
            <div className=' my-project-frist-img col-lg-4 col-md-6 col-sm-12  '>
                <img src={img1}   height="250"/>
                <div className='my-project-frist-text'>
                    <h4>Business Startup</h4>
                    <p>Design & Development</p>
                </div>
            </div>
            <div className='my-project-frist-img col-lg-4 col-md-6 col-sm-12 '>
                 <img src={img2}  height="250"/>  
                 <div className='my-project-frist-text'>
                    <h4>Business Startup</h4>
                    <p>Design & Development</p>
                </div> 
            </div>
            <div className=' my-project-frist-img col-lg-4 col-md-6 col-sm-12 '>
                 <img src={img3}   height="250"/>
                 <div className='my-project-frist-text'>
                    <h4>Business Startup</h4>
                    <p>Design & Development</p>
                </div>
            </div>
            <div className='my-project-frist-img col-lg-4 col-md-6 col-sm-12 '>
                    <img src={img1}   height="250"/>
                    <div className='my-project-frist-text'>
                    <h4>Business Startup</h4>
                    <p>Design & Development</p>
                </div>
            </div>
            <div className= 'my-project-frist-img col-lg-4 col-md-6 col-sm-12 '>
                    <img src={img2}   height="250"/>
                    <div className='my-project-frist-text'>
                    <h4>Business Startup</h4>
                    <p>Design & Development</p>
                </div>
            </div>
            <div className='my-project-frist-img col-lg-4 col-md-6 col-sm-12 '>
                    <img src={img3}   height="250"/>
                    <div className='my-project-frist-text'>
                    <h4>Business Startup</h4>
                    <p>Design & Development</p>
                </div>
            </div>

        </div>
        </div>
        <SecSection/>
        </>

    )
}
export default FrSection