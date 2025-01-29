import React, { useState } from 'react'
function Cart(props){
      const [Quantity, setQuantity] = useState(0)
  
  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev+1)
}
  console.log('props',typeof props.price)
  return (
    <>
    <p>Price:{`${props.price}`}</p>
    <button onClick={handleIncrementQuantity}>Add to Cart</button>
                        <h1>{Quantity}</h1>
                        </>
  );
}

export default Cart