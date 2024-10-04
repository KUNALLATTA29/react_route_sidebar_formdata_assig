
import { useState, useEffect } from "react"
import axios from 'axios'
import './data.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

export default function Data() {
    const [products, setproducts] = useState([]);
    const [search, setsearch] = useState('');
    const [sortdata, setsortdata] = useState('')
    const [rating,setrating] = useState([]);

    const fetch = async()=>{
        let response = await axios.get('https://dummyjson.com/products')
        setproducts(response.data.products); 
        console.log(response.data.products);
    }

    const filterData = () => {
        return products
            .filter((elem) => 
                elem.title.toLowerCase().includes(search.toLowerCase())
            )
            .filter((elem)=> rating.length === 0 || rating.includes(Math.round(elem.rating)))
            .sort(sortproducts);
    };

    const sortproducts = (a,b) => {
        if(sortdata === "ace"){
            return a.price - b.price;
        }else if(sortdata === "dec"){
            return b.price - a.price;
        }
        return 0;
    }


    const handleRating = (rat) => {
        setrating((prev) => 
            prev.includes(rat) ? prev.filter((r) => r !== rat) : [...prev, rat]
        );
    };

    useEffect(()=>{
        fetch();
    },[]);
  return (
    <div className="container data">
        <input
            type="text"
            placeholder="search the text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
        />
        <div>
            <button onClick={()=>setsortdata("ace")}>low to high</button>
            <button onClick={()=>setsortdata("dec")}>high to low</button>
        </div>
        <div className="rating-filters">
                {[1, 2, 3, 4, 5].map((rat) => (
                    <label key={rat}>
                        <input
                            type="checkbox"
                            checked={rating.includes(rat)}
                            onChange={() => handleRating(rat)}
                        />
                        {rat} Star
                    </label>
                ))}
        </div>
            <ul className="list">
                {filterData().map(product => (
                    <li key={product.id} className="list-item">
                        <LazyLoadImage
                        className="image"
                        src={product.images[0]}
                        effect="blur"
                        />
                        <h2 className="title">{product.title}</h2>
                        <p className="description">{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                        <p className="rating">Rating: {product.rating}</p>
                        <Link to={`/product/${product.id}`}>
                            <button>Show Detail</button>
                        </Link>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
  )
}