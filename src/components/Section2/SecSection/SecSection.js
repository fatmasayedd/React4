import './SecSection.css'
import React from "react"

import img1 from '../../../images/contact-img.svg'
// import { useState } from 'react'

const SecSection = () =>{
//     const formInitialDetails ={
//         fristName:'',
//         lastName:'',
//         email:'',
//         phone:'',
//         message:'',

//     }


//     const [formDetails , setFormDetails] = useState(formInitialDetails);
//     const [buttonText , setButtonText] = useState('Send');
//     const [status ,setStatus ] = useState({});
// const onFormUpdate = ( category , value) => {
//     setFormDetails({
//         ...formDetails,
//         [category]:value
//     })
// }






    return(
 
        <>

{/* 
<div className='contact' id='connect'>

<div className='container'>
   <div className='row align-items-center'>
    <div className='col-md-6'>
    

<img src={img1}/>


    </div>
    <div className='col-md-6'>
        <h2>Get In Touch</h2>
        <form >
<div className='row '>
     <div className='col-sm-6 px-1'>
         <input type='text' value={formDetails.fristName} placeholder='Frist Name' onChange={(e) => onFormUpdate('fristName' , e.target.value)}/>
     </div>
     <div className='col-sm-6 px-1'>
         <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName' , e.target.value)}/>
     </div>
     <div className='col-sm-6 px-1'>
         <input type='email' value={formDetails.email} placeholder='Email Address ' onChange={(e) => onFormUpdate('email' , e.target.value)}/>
     </div>
     <div className='col-sm-6 px-1'>
         <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone' , e.target.value)}/>
     </div>
     <div className='col'>
          <textarea  row='6' value={formDetails.message} placeholder='Message'  onChange={(e) => onFormUpdate('message' , e.target.value)}/> 
          <button type='submit'> <span>{buttonText}</span></button>   
     </div>
     {
        status.message &&
        <div className='col'>
            <p className={status.success === false ? "danger" : "success"}> {status.message}</p>
        </div>
     }
</div>

        </form>

    </div>
 </div>
</div>

</div>

 */}









      <div className=' get-in-touch '>
            <div className='container '> 
                <div className='row'>

                    <div className=' col-md-6 col-sm-12 pl-5 pt-3'>
                    <img src={img1} width="250" height="250"/>
                    </div>

                    <div className=' pl-5 col-md-6 col-sm-12 '>
                        <h2>Get ln Touch</h2>
                        <div className=' col-12 row '>
                        <input type="text" placeholder='Frist Name'className='col bg-light' />
                        <input type="text" placeholder='Last Name' className='col bg-light'/>
                        </div>
                        <div className=' col-12 row '>
                         <input type="email" placeholder='Email Address'className='col bg-light' />
                        <input type="number" placeholder='Phone No'className='col bg-light' />
                        </div>
                       
                        <input type="text" placeholder='Message'  className='message col-11 bg-light'/>
                        <br/>
                    
                        <button>Send</button>
                    </div>


                    
                </div>
            </div>
       
        </div>

 


        </>

    )
}
export default SecSection