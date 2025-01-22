import React from 'react'
function Cart(props){
  console.log('props',typeof props.price)
  return (
    <p>Price:{`${props.price}`}</p>
    
  );
}

export default Cart