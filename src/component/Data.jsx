
import { useState, useEffect } from "react"
import axios from 'axios'
import './data.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Data() {
    const [products, setproducts] = useState([]);

    const fetch = async()=>{
        let response = await axios.get('https://dummyjson.com/products')
        setproducts(response.data.products); 
        console.log(response.data.products);
    }

    useEffect(()=>{
        fetch();
    },[]);
  return (
    <div className="container data">
            <ul className="list">
                {products.map(product => (
                    <li key={product.id} className="list-item">
                        <LazyLoadImage
                        className="image"
                        src={product.images[0]}
                        effect="blur"
                        />
                        <h2 className="title">{product.title}</h2>
                        <p className="description">{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
  )
}
