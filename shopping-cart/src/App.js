import './App.css';
import Sample from './Sample';
import myimg from './images/pexels-photo-1624496.jpeg';
import Cart from './Cart';
import Api from './Api'
function App(){

return(
<>
<Cart Price="$85"/>
{/* <Api/> */}
<div className='main'>
  <h1> hello this is manojkumar </h1>
  <h2> welcome to website platform </h2>
</div >
<div className='main2'>
  <button onClick={()=>alert("hello")}>welcome</button>
</div>
<div>
  <nav className='navbar'>
  <ul className='navb'>
    <a href='www.google.com'><li className='navitem'>
    <h3> option1</h3></li></a>
    <a href='www.google.com'><li className='navitem'><h3> option2</h3></li></a>
    <a href='www.google.com'><li className='navitem'>  <h3> option3</h3></li></a>
    <a href='www.google.com'><li className='navitem'>  <h3> option4</h3></li></a>
  </ul>
  </nav>
</div>
<Sample/>
<Api/>
<div className='footermain'>
<div className='footer'>
  <ul>
    <a href='wndkn'> <li>Home</li></a>
    <a href='wndkn'> <li>About us</li></a>
    <a href='wndkn'> <li>Contact us</li></a>
    <a href='wndkn'> <li>Blogs</li></a>
    <a href='wndkn'> <li>Sitemaps</li></a>
  </ul>
 
</div>
<div>
  <ul><h1> Shop Now</h1></ul>
  <a href='wndkn'> <li>Collections</li></a>
    <a href='wndkn'> <li>Trending products</li></a>
    <a href='wndkn'> <li>New Arrivals Products</li></a>
    <a href='wndkn'> <li>Featured Products</li></a>

</div>
</div>
</>);
}



export default App;
