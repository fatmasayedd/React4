import React from "react"
import './Home.css'
import { useState , useEffect } from "react"
// import logo from '../../images/banner-bg.png'
import Hero from '../../images/header-img.svg'
// import Section1 from "../Section1/Section1"
// import Section2 from "../Section2/Section2"
// import FrSection from "../Section2/FrSection/FrSection"
const Home = () => {




    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting ,setIsDeleting ] = useState(false);
    const toRotate = [ "FullStack wep Developer" ,"FrontEnd Developer" , "BackEnd Developer"];
    const [text , setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
    tick();
   },delta)

    return () => { clearInterval(ticker)};
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }

if (!isDeleting && updateText === fullText){
        setIsDeleting(true);
        setDelta(period);

    } else if(isDeleting && updateText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    } 

}
    return(
     
       <>

     
<div className='banner ' id='home'>
<div className='container '>
    <div className=' row  align-items-center'>
        <div className='col-xl-7 col-md-6 col-sm-12'>
           
        <span className='tagline'> Welcome All In My Portfolio</span> 
        <h1>{` Hi! I'm Fatma Sayed Hessuin, `}<span className="wrap">{text}</span></h1>

            <p >Hello EveryOne,I have 8 years of Experience in Wep Delevolpment</p>
            <h5 >Let's Connect <i class="far fa-arrow-alt-circle-right ml-3 mt-1"></i></h5>
        </div> 
    
        <div className=' col-md-5 col-sm-12'>
            <img src={Hero}/>
        </div>
    </div>
</div>



</div>



</>

    )
}
export default Home;
