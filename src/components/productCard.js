import React, { useState } from 'react'
import PlusIcon from "../components/icons/PlusIcon"
import { navigate } from 'gatsby-link';
import useStore from '../context/storeContext';

function ProductCard({product}) {

    const { addVariantToCart } = useStore()
    
    const [hover, setHover] = useState(false);
    
    return (
        <div className="relative flex flex-col items-center hover:shadow-md" onClick={() => navigate(`${product.handle}`)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={product.images[0].src} alt="data" width={200} height={200} className="object-contain" className="border" />
            <h3 className="text-base text-gray-600 my-2">{product.title}</h3>
            <h4 className="text-xl text-gray-800 font-semibold">Rs.{product?.priceRangeV2.maxVariantPrice.amount}</h4>
            {
                hover ? (
                    <button className="absolute top-5 right-5 transform text-gray-50 bg-pink-700 p-3 rounded-full transition duration-300 hover:bg-pink-800 hover:scale-110" onClick={() => {addVariantToCart(product, 1); alert('Added to cart')}}><PlusIcon width={20} height={20} /></button>
                ) : null
            }
        </div>
    )
}

export default ProductCard
