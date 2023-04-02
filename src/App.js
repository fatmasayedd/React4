import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Header  , Container ,Home, Section1 , Section2 , FrSection , SecSection ,ThSection , Footer } from "./components/index";

import './App.css';

function App() {
  return (
  <>
  
  <BrowserRouter>
                          <Header/> 
                          <Home/>
                          <Section1/>
                          <Section2/>  
                                          
                             <Container>         
                                  <Routes>   
                                                                           
                                            <Route path="/frsection"  element={<FrSection/>}/>
                                            <Route path="/secsection" element={<SecSection/>}/>
                                            <Route path="/thsection" element={<ThSection/>}/>
                                    
                                  </Routes>   
                             </Container>
                            
                             <FrSection/>
                          <Footer/>
                    </BrowserRouter>
  
  
  </>
  );
}

export default App;
