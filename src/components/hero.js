import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Hero() {
    return (
        <div className="relative w-full mt-12">
            <div className="z-10 absolute left-1/4 top-1/3 w-1/2 transform -translate-y-1/4">
                <p className="text-xl -mb-2 ml-2 font-semibold text-pink-100 tracking-wide">New Arrivals</p>
                <h1 className="text-8xl font-semibold uppercase text-pink-50">Extra Comfort.</h1>
                <p className="text-base mt-5 text-pink-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vel possimus distinctio fugit ex, delectus saepe aut aperiam nostrum ducimus voluptas ipsa dolore fuga explicabo harum ad mollitia iste consectetur velit laborum similique. Laudantium magni nisi aspernatur, odit fuga totam blanditiis hic molestiae? Incidunt, cum.</p>
                <button className="mt-6 text-base font-semibold text-gray-100 bg-pink-700 px-12 py-3 rounded-md hover:bg-pink-800 transform transition duration-500">Explore</button>
            </div>
            <StaticImage className="w-full" height={500} src="https://images.unsplash.com/photo-1597879995142-19b8b6e7ae2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" layout="constrained" alt="Header" />
        </div>
    )
}

export default Hero
