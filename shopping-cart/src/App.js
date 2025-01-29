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
import { Link, Router } from 'react-router-dom';
import react, { createContext,useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


export const UserContext=createContext();


function App() {
  const [user,setuser]=useState("manoj kumar");
  const [slide,setslide]=useState(0)
  const images = [
    img,img3,img4
  ]; 
  let temp=slide;
  const hoverClass=slide===temp?'indicator':'indicator_slide';
  
return(
<>
{/*<UserContext.Provider value={user}><Ref/></UserContext.Provider>*/}
<BrowserRouter>
 <Routes>
  <Route path='/' element={<Navbar/>}/>
  <Route path='/' element={<Footer/>}/>
  <Route path='/Login' element={<Login/>}/> 
  <Route path='/Cart' element={<Api/>}/> 
 </Routes>
{/* I am manoj */}
 {/* <div className='slider'>
  <div className='slides'>
  
   <img src={images[slide]} alt='image'></img>
   
   <span className='indicators'>
    <button className={hoverClass}></button>
    <button className={hoverClass}></button>
    <button className={hoverClass}></button>
    
    
   </span>
   
  </div>
  <p>count:{slide}</p>
  <BsArrowLeftCircle className='arrow-left' onClick={()=>setslide(slide+1)}/>
  <BsArrowRightCircle className='arrow-right' onClick={()=>setslide(slide-1)}/>
</div>
<div className='allgap'>
  <div className='gap'>
   <h1>Discounts</h1>
  </div>
</div> */}


 {/*<div>
  const Image=()=> { 
  return(
  <img src={img4}  alt='image4'/>);
  }
 </div>*/}

 {/* count:{slide} */}
 
 {/*<BsArrowLeftCircle className='arrow' onClick={()=>{return(<h1>helli</h1>)}}/>*/}
 
 
 

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
