import React from 'react'
import { Link } from 'gatsby'
import ArrowLeft from "../components/icons/ArrowLeft"
import ArrowRight from "../components/icons/ArrowRight"
import { graphql, useStaticQuery } from 'gatsby'
import ProductCard from './productCard'

function Featured() {

    const data = useStaticQuery(graphql`
    {
        allShopifyProduct {
            nodes {
                title
                handle
                variants {
                shopifyId
                }
                priceRangeV2 {
                maxVariantPrice {
                    amount
                }
                }
                description
                images {
                src
                }
            }
        }
    }
    `);

    const { nodes } = data.allShopifyProduct;

    // console.log(nodes);

    return (
        <div className="container mx-auto mt-10">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="" className="mr-6 text-xl font-semibold text-gray-500">Featured</Link>
                    <Link to="" className="text-xl font-semibold text-gray-500">Trending</Link>                    
                </div>
                <div className="flex items-center">
                    <button className="mr-2 p-3 rounded-full bg-gray-400 text-white hover:bg-gray-600 transform transition duration-200"><ArrowLeft width={20} height={20} /></button>
                    <button className=" p-3 rounded-full bg-pink-700 text-white hover:bg-pink-800 transform transition duration-200"><ArrowRight width={20} height={20} /></button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-1 overflow-hidden lg:-mx-1 mt-10">
                {
                    nodes?.map((product, index) => (
                        <div key={index} className="my-1 px-1 w-full overflow-hidden sm:w-full md:w-1/3 lg:my-1 lg:px-1 lg:w-1/4 xl:w-1/5">
                            <ProductCard product={product}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Featured
