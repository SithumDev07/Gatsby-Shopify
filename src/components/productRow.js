import React from 'react'
import CloseIcon from "../components/icons/CloseIcon"

function ProductRow({ item }) {
    return (
        <div className="flex flex-wrap -mx-1 overflow-hidden items-center">
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">#4521</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <img src="" alt="Product" />
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">BUGABOO BUFFALO</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">Rs.30,000.00</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">1</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <button className="p-2 rounded-full bg-red-500 text-gray-100">
                    <CloseIcon width={20} height={20} />
                </button>
            </div>
        </div>
    )
}

export default ProductRow
