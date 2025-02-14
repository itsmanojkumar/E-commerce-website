import './App.css';
import Sample from './Sample';
import myimg from './images/pexels-photo-1624496.jpeg';
import img from './images/img2.png';
import img3 from './images/img3.jpg';
import img4 from './images/img4.avif';
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";
import Cart from './Cart';
import Api from './Api'
import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';
import Ref from './Ref';
// import Task from './Task';
import { Link, Router } from 'react-router-dom';
import react, { createContext,useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Googlelogin from './Googlelogin';


export const UserContext=createContext();


function App() {
  
return(
<>

{/*<UserContext.Provider value={user}><Ref/></UserContext.Provider>*/}
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar />}/>
  <Route path="/Login" element={<Login />} /> 
  <Route path="/Cart" element={<Api />} />
</Routes>
 {/* <Googlelogin/> */}
 
{/* I am manoj */}
  
 
 

  {/*<Cart Price="$85" />*/}
 
  
  {/* <Api/> */}
  
{/* <Footer/> */}
  </BrowserRouter>
{/* <div className='all'>
  <div className='border1'>
    <div className='border2'>
      <div>
      <nav className='navlast'>
        <ul>
          <li>page:Home</li>
          <li>Tools</li>
          <li>publish</li>
        </ul>
      </nav>
      </div>
      <div className='border3'>
      <img src={images[slide]} alt='image'></img>
  
      </div>
    </div>
  </div>
</div> */}


{/*<Ref/>*/}
</>
);
}



export default App;
