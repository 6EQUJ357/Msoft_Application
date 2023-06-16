import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home'
import About from "./components/about"
import Contact from "./components/contact"


//pages components

//import Priceplan from './components/pages/priceplan'
import Ourfeatures from './components/pages/ourfeatures'
import Teammembers from './components/pages/teammembers'
import Pageterminal from './components/pages/pageterminal'
import Freequote from './components/pages/freequote'

// services components

// import Bulksms from './components/services/bulksms'
// import Contentwriting from './components/services/contentwriting'
import Digitalmarketing from './components/services/digitalmarketing'
import Mobileapplication from './components/services/mobileapplication'
// import Priceinfo from './components/services/priceinfo'
import Webapplication from './components/services/webapplication'
//import Webhosting from './components/services/webhosting'  



const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/contact' element = {<Contact/>}/>

          {/* pages components routers */}
          {/* <Route path='/priceplan' element = {<Priceplan/>}/> */}
          <Route path='/ourfeatures' element = {<Ourfeatures/>}/>
          <Route path='/teammembers' element = {<Teammembers/>}/>
          <Route path='/terminal' element = {<Pageterminal/>}/>
          <Route path='/quote' element = {<Freequote/>}/>

          

          {/* services components routers */}
          <Route path='/mobileapplication' element = {<Mobileapplication/>}/>
          <Route path='/webapplication' element = {<Webapplication/>}/>
          <Route path='/digitalmarketing' element = {<Digitalmarketing/>}/>
          {/* <Route path='/webhosting' element = {<Webhosting/>}/>
          <Route path='/bulksms' element = {<Bulksms/>}/>
          <Route path='/contentwriting' element = {<Contentwriting/>}/> */}


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App