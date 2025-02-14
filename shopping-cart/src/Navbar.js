import './Navbar.css';
import Cart from './Cart';
import { Link } from 'react-router-dom';

import Sample from './Sample';
import myimg from './images/pexels-photo-1624496.jpeg';
import img from './images/img2.png';
import img3 from './images/img3.jpg';
import img4 from './images/img4.avif';
import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";






import react, { useState } from 'react';
import Footer from './Footer';
function Navbar() {
  const [user,setuser]=useState("manoj kumar");
  const [slide,setslide]=useState(0)
  const images = [
    img,img3,img4
  ]; 
  let temp=slide;
  const hoverClass=slide===temp?'indicator':'indicator_slide';
  
  
    const [Menu, setMenu] = useState("Menu");
  return(
<div>
  <div className='Navmain'>
  <h1>Ecommerce</h1>
  <h1><Link to="/Login">Login</Link></h1>
  <h1><Link to="/Cart">Cart</Link></h1></div>
    <nav className='navbar'>
      <ul className='navb'>
        {/*<li onClick={()=>{setMenu("Shop")}}><ink to='/'>Shop</Link>{Menu==="Shop"?<hr/>:<></>}</li>*/}
        <li onClick={()=>{setMenu("Sell")}}>Sell{Menu==="Sell"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Buy")}}>Buy{Menu==="Buy"?<hr/>:<></>}</li>
      </ul>
    </nav>
    <div>
    <div className='slider'>
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
</div> 
{/* <Footer/> */}

 {/*<div>
  const Image=()=> { 
  return(
  <img src={img4}  alt='image4'/>);
  }
 </div>

 {/* count:{slide} */}
 
 <BsArrowLeftCircle className='arrow' onClick={()=>{return(<h1>helli</h1>)}}/>
 
     
    </div>
    <Footer/>
  </div>
  
  );
}

export default Navbar;
