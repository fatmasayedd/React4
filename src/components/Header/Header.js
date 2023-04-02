import React from "react";
import "./Header.css";
const Header = () => {
    return (
     <>

<nav className=" navbar navbar-expand-lg bg-dark navbar-dark sticky-top ">
  <div className="container">
  <a className="navbar-brand" href="#">LOGO</a>
  {/* <Link  className="navbar-brand">LOGO</Link> */}
  <div className="space bg-light"></div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse row justify-content-evenly " id="collapsibleNavbar">
    <ul className="navbar-nav ">
    
      <li className="nav-item">
        <a className="nav-link text-light mx-3" href="#home">Home</a>
        {/* <Link href="#/home" className="nav-link text-light mx-3" >Home</Link> */}
      </li>
      <li className="nav-item">
        <a className="nav-link text-light mx-3" href="#skills">Skills</a>
        {/* <Link href="#skill" className="nav-link text-light mx-3">Skills</Link> */}
      </li>
      <li className="nav-item">
        <a className="nav-link text-light mx-3" href="#projecte">Projecte</a>
        {/* <Link to="/projecte" href="#projecte" className="nav-link text-light mx-3" >Projecte</Link> */}
      </li>    
    
          <li className="nav-item icons ml-4">
            <div className="row ">
            <div className="row mt-2  "> 
                <div className="div-icon mr-1 ml-4">
                {/* <Link to="/"> <i className="icon fab fa-linkedin-in text-light"></i></Link> */}
                  <a href="https://www.linkedin.com/in/fatma-sayed-hussein-a109751ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE6mN7RYoRnWTVrT%2FiLar%2Bw%3D%3D"><i className="icon fab fa-linkedin-in text-light"></i></a>
                </div>

               
                {/* <div className="div-icon mr-1 ml-4"><a href="#" style={{"color":"white"}}><FaLinkedinIn/></a></div> */}
               
                <div className="div-icon  mr-1">
                {/* <Link to="/"> <i className="icon fab fa-facebook-f text-light"></i></Link> */}
                   <a href="/#"> <i className="icon fab fa-facebook-f text-light"></i></a>
                   </div>

                <div className="div-icon  mr-1">
                  {/* <Link to="/"> <i className="icon fab fa-whatsapp text-light"></i></Link> */}
                  <a href="/#"><i className="icon fab fa-whatsapp text-light"></i></a>
                  </div>

            </div>
        <div className="let ml-4"> Let"s Connect </div>
        </div>
      </li> 
     
    </ul>
    
  </div> 
  </div> 
</nav>
  
     
     
     </>
    );
  }
  
  export default Header;