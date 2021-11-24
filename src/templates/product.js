import React, { useState } from 'react'
import Layout from '../components/layout';
import MinusIcon from "../components/icons/Minus"
import PlusIcon from "../components/icons/PlusIcon"
import Bag from "../components/icons/Bag"
import ArrowLeft from "../components/icons/ArrowLeft"
import { navigate } from 'gatsby-link';

function ProductTemplate({ pageContext }) {

    const { product } = pageContext;
    const [counter, setCounter] = useState(0);
    const [price, setPrice] = useState(product?.priceRangeV2.maxVariantPrice.amount);

    console.log(product);

    return (
        <Layout onlyUpper={false}>
            <div className="relative w-full h-48 bg-pink-200 text-center flex flex-col items-center justify-center text-5xl uppercase tracking-wide text-gray-700">
                <p>
                    {product?.title}
                </p>
                <p className="mt-3 text-xl text-gray-500">{product?.productType}</p>
                <button className="shadow-md absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-50 bg-gray-700 p-4 rounded-full" onClick={() => navigate(-1)}>
                    <ArrowLeft width={16} height={16} />
                </button>
            </div>
            <div className="mx-auto container">    
                <div className="mt-10 flex flex-wrap -mx-px overflow-hidden xl:-mx-1">
                    <div className="my-px px-px w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                        <div className="">
                            <img width={500} src={product?.images[0].src} alt="" />
                        </div>
                        <div className="flex items-center">
                            {
                                product?.images.map((item, index) => (
                                    <img width={100} height={100} key={index} src={item?.src} alt={`gallery-${index}`} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="my-px px-px w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                        <div className="w-full h-full">
                            <h1 className="text-4xl text-gray-800 font-semibold mb-5">{product?.title}</h1>
                            <p className="text-base text-gray-500 mb-10">{product?.description}</p>
                            <div className="flex items-center justify-between w-1/2">
                                <div className="flex items-center">
                                    {product?.variants.map((item, index) => {
                                        let color;
                                        switch(item?.selectedOptions[0].value){
                                            case 'Black':
                                                color = "bg-black";
                                                break;
                                            case "Brown":
                                                color = "bg-yellow-700";
                                                break;
                                            case "Blue":
                                                color = "bg-blue-700";
                                                break;
                                            default:
                                                break;
                                        }
                                        return (
                                        <button key={index} className={`w-10 h-10 rounded-full mr-2 ${color}`}>{/* item?.selectedOptions[0].value */}</button>
                                    )})}
                                </div>
                                <div className="flex items-center">
                                    <button className="rounded-full p-5 text-gray-50 bg-pink-700" onClick={() => {counter < 1 ? setCounter(0) : setCounter(counter-1)}}>
                                        <MinusIcon width={20} height={20} />
                                    </button>
                                    <p className="text-4xl mx-3 text-gray-800 font-semibold">{counter < 0 ? 0 : counter}</p>
                                    <button className="rounded-full p-5 text-gray-50 bg-pink-700" onClick={() => setCounter(counter+1)}>
                                        <PlusIcon width={20} height={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-10 mt-10 w-1/2">
                                <h1 className="text-3xl font-semibold text-gray-900">Rs {price}0</h1>
                                <button className="text-gray-50 flex items-center bg-pink-700 rounded-3xl px-6 py-4 transform transition duration-300 hover:bg-pink-800" onClick={() => alert('Added to cart')}>
                                        <h3 className="mr-3 text-xl">Get</h3>
                                        <Bag width={20} height={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductTemplate
