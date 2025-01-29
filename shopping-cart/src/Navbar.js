import './Navbar.css';
import { Link } from 'react-router-dom';


import react, { useState } from 'react';
function Navbar() {
  
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
  </div>
  );
}

export default Navbar;
