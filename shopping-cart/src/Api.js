import React, { useEffect, useState } from 'react'
import myimg from './images/pexels-photo-1624496.jpeg';
import Cart from './Cart';

const Api = () => {
    const [data, setData] = useState([])
    async function fetchdata() {
        try {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(res => setData(res));
        } catch (err) {
            console.log(err)
        };
    }
    useEffect(() => {
        console.log(fetchdata())
    }, [])

    console.log('data', data.products);

    return (<div>{data.products?.length && <div className='allimg'>
        {
            data.products.map((item) => {
                console.log('item.price', item.price)
                
                return (
                    <div className='imge'>
                        <img src={item.images[0]} alt='hello' width={200}></img>
                        <Cart price={item.price}/>
                    </div>
                )
            })
        }</div>}
    </div>);
}

export default Api