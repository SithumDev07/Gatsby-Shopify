import React from 'react'
import CloseIcon from "../components/icons/CloseIcon"
import useStore from '../context/storeContext'

function ProductRow({ item }) {

    const { removeLineItem } = useStore();
    const { product, quantity } = item

    return (
        <div className="flex flex-wrap -mx-1 overflow-hidden items-center">
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">#4521</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <img className="w-20 h-20 object-contain" src={product?.images[0].src} alt="Product" />
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">{product?.title}</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">Rs {product?.priceRangeV2.maxVariantPrice.amount}0</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <h3 className="text-base font-semibold text-gray-700">{quantity}</h3>
            </div>
            <div className="my-1 px-1 w-1/6 overflow-hidden">
                <button className="p-2 rounded-full bg-red-500 text-gray-100" onClick={() => removeLineItem(product.variants[0]?.shopifyId)}>
                    <CloseIcon width={20} height={20} />
                </button>
            </div>
        </div>
    )
}

export default ProductRow
