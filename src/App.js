import logo from './logo.svg';
import './App.css';
import Footer from './Shared/Footer';

import Carosel from './pages/Home/Carosel';
import Hero from './pages/Home/Hero';
import Navbar from "./Shared/Navbar"
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus/Aboutus';
import Contactus from './pages/contact/Contactus';
import Ourdoctor from './pages/OurDoctor/Ourdoctor';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Detiles from './pages/Detiles';
import Authprovider from './Context/Authprovider';
import Privateroute from './privateroute/Privateroute';
import Notfound from './pages/Notfound/Notfound';
import Semicontact from './pages/contact/Semicontact';

function App() {
  return (
    <div className="App">
 
 <Authprovider>

      <BrowserRouter>

    <Navbar></Navbar>
      
     <Switch>

         <Route exact path="/">
              <Hero></Hero>
           </Route>

           <Route  path="/home">
              <Hero></Hero>
           </Route>

           <Route  path="/ourdoctor">
              <Ourdoctor></Ourdoctor>
           </Route>
        

           <Route path="/about">
              <Aboutus></Aboutus>
           </Route>

           <Route path="/login">
              <Login></Login>
           </Route>


         {/* <Route path="contactus">
             <Contactus></Contactus>
           </Route> */}
           
         <Route path="/semi">
             <Semicontact></Semicontact>
           </Route>
           
           <Privateroute path="/detiles/:id">
              <Detiles></Detiles>
           </Privateroute>

           

           
           <Route path="/signup">
             <Signup></Signup>
           </Route>

           <Route path="*">
            <Notfound></Notfound>
           </Route>


         </Switch>
      <Footer></Footer>
      </BrowserRouter>

  </Authprovider>

     
      
     
    </div>
  );
}

export default App;
