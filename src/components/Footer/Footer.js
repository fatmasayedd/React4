import './Footer.css'
import React from 'react'

// import logo1 from "../../images/logo.svg"
// import navIcon1 from "../../images/nav-icon1.svg"
// import navIcon2 from "../../images/nav-icon2.svg"
// import navIcon3 from "../../images/nav-icon3.svg"




const Footer = () =>{

    // const posturl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_}`
    return(
       
<>
<div className='footer'>

<div className='container'>
<div className='row '>

<div className='col-lg-12 '>
    <div className='box-See-My'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 pr-2 '>
            <h3 >See My Project At Once & Leave Here Your E-mail Address</h3>
            </div>
            <div className='col-md-6 col-xl-6 col-sm-11 mt-2 '>
                <form className='email-box '>
                    <input  type='email' placeholder='Email '/>
                    <button type="button" className='py-4 ' > <p> Submit</p>  </button>
                </form>

            </div>

         

        </div>

    </div>
</div>


<div > 
    
    </div>
    <div className='container'>
<div className='row  '>

    <div className='col-6'>
      <a className="navbar-brand text-light " href="#">LOGO</a>
    </div>
        <div className='col-6  text-center text-sm-end  ' >
                    
            <div className='social-icon'> 
            <div className="row ">
                        <div className="row mr-2 ml-auto"> 
                            <div className="div-icon mr-1 ml-4">
                    
                            <a href="https://www.linkedin.com/in/fatma-sayed-hussein-a109751ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE6mN7RYoRnWTVrT%2FiLar%2Bw%3D%3D"><i className="icon fab fa-linkedin-in text-light"></i></a>
                            </div>
                        
                            <div className="div-icon  mr-1">

                            <a href="/#"> <i className="icon fab fa-facebook-f text-light"></i></a>
                            </div>

                            <div className="div-icon  mr-4">
                            <a href="/#"><i className="icon fab fa-whatsapp text-light"></i></a>
                            </div>

                        </div>
                    </div>
            </div>
          
            <p className='text-center ml-5'>--Copyrights 2023 --All Rights Reserved here By Fatma Sayed Hesuin</p>     

        </div>
</div>
</div>
</div>
</div>



</div>




















        {/* <div className='footer '>

        
            <div className='  container  '>
                <div className='col-lg-10 col-sm-2 row  justify-content-around see-my'>
                    <div className='col-sm-6 '>
                        <h2 >See My Project At Once & Leave Here Your E-mail Address</h2>
                    </div>
                    <div className='col-sm-6 '>
                       <input type="email" placeholder='Email Address' className='footer-input col-sm-11  '/> <button className='submit '>Submit</button>
                    </div>
                </div>
            </div>
        

     
            <div className='container pt-5'>
                <div className='row '>
                   <div className='col-sm-11'>
                       
                        <div className='row  footer-icon  '> 
                        <h3 className='footer-logo  col'>LOGO</h3>
                            <div className='div-icon pr-1 pl-4'><i className='icon fab fa-linkedin-in text-light'></i></div>
                            <div className='div-icon  pr-1'><i className='icon fab fa-facebook-f text-light'></i></div>
                            <div className='div-icon  pr-1'><i className='icon fab fa-whatsapp text-light'></i></div>
                           
                        </div> 
                        <p className='text-center'>--Copyrights 2023 --All Rights Reserved here By Fatma Sayed Hesuin</p>         
                    </div>
                </div>
            </div>

         
        </div> */}

       
</>

    )
}
export default Footer