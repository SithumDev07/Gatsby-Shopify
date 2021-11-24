import React from 'react'
import Layout from '../components/layout'
import ProductRow from '../components/productRow'
import ArrowRight from "../components/icons/ArrowRightLine"
import useStore from '../context/storeContext'

function Cart() {

    const { cart } = useStore()

    return (
        <Layout onlyUpper={false}>
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
                    <button className="text-gray-100 px-5 py-3 rounded-md bg-pink-800 flex items-center transform transition duration-300 hover:bg-pink-900">
                        <p className="mr-2 text-base">Checkout</p>
                        <ArrowRight width={20} height={20} />
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
