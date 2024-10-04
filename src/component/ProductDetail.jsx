import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './productdetail.css'
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);


    const fetchProduct = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
    };


    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <h2 className="title">{product.title}</h2>
            <div className="content">
                <img src={product.images[0]} alt={product.title} className="large-image" />
                <div className="details">
                    <p>{product.description}</p>
                    <p className="price">Price: ${product.price}</p>
                    <p className="rating">Rating: {product.rating}</p>
                    <p className="category">Category: {product.category}</p>
                    <p className="brand">Brand: {product.brand}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
