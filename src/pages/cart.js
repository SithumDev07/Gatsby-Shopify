import React from 'react'
import Layout from '../components/layout'
import ProductRow from '../components/productRow'
import ArrowRight from "../components/icons/ArrowRightLine"
import useStore from '../context/storeContext'
import { navigate } from 'gatsby-link'
import SvgArrowLeft from '../components/icons/ArrowLeft'

function Cart() {

    const { cart, checkout } = useStore()

    console.log("cart", cart);

    return (
        <Layout onlyUpper={false}>
            <div className="relative w-full h-48 bg-pink-200 text-center flex flex-col items-center justify-center text-5xl uppercase tracking-wide text-gray-700">
                <p>
                    Your Bag
                </p>
                <button className="shadow-md absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-50 bg-gray-700 p-4 rounded-full" onClick={() => navigate(-1)}>
                    <SvgArrowLeft width={16} height={16} />
                </button>
            </div>
            <div className="container mx-auto mt-12 mb-6">
                <div className="flex flex-wrap -mx-1 overflow-hidden items-center mb-10">
                    <div className="my-1 px-1 w-1/6 overflow-hidden">
                        <h3 className="text-base font-semibold text-gray-700">Product ID</h3>
                    </div>
                    <div className="my-1 px-1 w-1/6 overflow-hidden">
                        <h3 className="text-base font-semibold text-gray-700">Product</h3>
                    </div>
                    <div className="my-1 px-1 w-1/6 overflow-hidden">
                        <h3 className="text-base font-semibold text-gray-700">Name</h3>
                    </div>
                    <div className="my-1 px-1 w-1/6 overflow-hidden">
                        <h3 className="text-base font-semibold text-gray-700">Price</h3>
                    </div>
                    <div className="my-1 px-1 w-1/6 overflow-hidden">
                        <h3 className="text-base font-semibold text-gray-700">Quantity</h3>
                    </div>
                    <div className="my-1 px-1 w-1/6 overflow-hidden">
                        <h3 className="text-base font-semibold text-gray-700">Remove From Bag</h3>
                    </div>
                </div>
                {
                    cart.length > 0 ?  cart.map((item, index) => <ProductRow key={index} item={item} />) : <div className="flex items-center justify-center text-xl font-semibold text-gray-500"><h3>Your bag is empty</h3></div>
                }
                <div className="flex items-center justify-end">
                    <button className="text-gray-100 px-5 py-3 ring-4 ring-pink-100 rounded-md bg-pink-800 flex items-center transform transition duration-300 hover:bg-pink-900 disabled:opacity-50" disabled={cart.length === 0} onClick={() => window.open(checkout.webUrl)}>
                        <p className="mr-2 text-base">Checkout</p>
                        <ArrowRight width={20} height={20} />
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
