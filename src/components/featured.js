import React from 'react'
import { Link } from 'gatsby'
import ArrowLeft from "../components/icons/ArrowLeft"
import ArrowRight from "../components/icons/ArrowRight"

function Featured() {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/featured" className="mr-6 text-xl font-semibold text-gray-500">Featured</Link>
                    <Link to="/trending" className="text-xl font-semibold text-gray-500">Trending</Link>                    
                </div>
                <div className="flex items-center">
                    <button className="mr-2 p-3 rounded-full bg-gray-400 text-white"><ArrowLeft width={20} height={20} /></button>
                    <button className=" p-3 rounded-full bg-pink-700 text-white"><ArrowRight width={20} height={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default Featured
