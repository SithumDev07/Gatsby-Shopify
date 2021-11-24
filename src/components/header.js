import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Call from "../components/icons/Call"
import Email from "../components/icons/Email"
import Facebook from "../components/icons/Facebook"
import Instagram from "../components/icons/Instagram"
import Pinterest from "../components/icons/Pinterest"
import Twitter from "../components/icons/Twitter"
import Search from "../components/icons/Search"
import Profile from "../components/icons/Profile"
import Bag from "../components/icons/Bag"


const Header = ({ siteTitle, onlyUpper = true }) => {
  const [current, setCurrent] = React.useState(true);
  return (
  <header>
    <div className="bg-gray-300 h-14">
      {/*  // *Contact */}
      <div className="flex items-center justify-between container mx-auto h-full">
        <div className="flex items-center">
          <a href="callto:+75 5555 121" className="flex items-center">
            <Call stroke="#878A8E" width={22} height={22}/>
              <p className="ml-2 text-sm text-gray-700">+75 5555 121</p>
          </a>
          <a href="mailto:support@babycarepremium.com" className="flex items-center ml-8">
            <Email stroke="#878A8E" width={22} height={22}/>
            <p className="ml-2 text-sm text-gray-700">support@babycarepremium.com</p>
          </a>
        </div>
        {
          onlyUpper ? (
            <div className="flex items-center">
              <a href="" className="mr-2">
                <Facebook stroke="#878A8E" width={22} height={22}/>
              </a>
              <a href="" className="mr-2">
                <Instagram stroke="#878A8E" width={22} height={22}/>
              </a>
              <a href="" className="mr-2">
                <Pinterest stroke="#878A8E" width={22} height={22}/>
              </a>
              <a href="" className="mr-2">
                <Twitter stroke="#878A8E" width={22} height={22}/>
              </a>
            </div>
          ) : null
        }
        
      </div>
    </div>
    {/* //* Middle Search */}
    {
      onlyUpper ? (
        <>
        <div className="flex items-center container mx-auto justify-between">
          <StaticImage src="../images/logo.png" layout="fixed" width={200} height={200} alt="logo"/>
          <div className="flex items-center w-1/2">
              <input type="text" placeholder="Search..." className="flex-1 border-2 rounded-md px-4 py-3"/>
              <button className="p-3 bg-pink-700 rounded-md text-white ml-3">
                <Search />
              </button>
          </div>
          <div className="flex items-center">
            <button className="p-3 bg-gray-300 rounded-md text-gray-500 mr-5">
              <Profile />
            </button>
            <Link to="/cart">
              <button className="p-3 bg-gray-300 rounded-md text-gray-500">
                <Bag />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center">
            <Link to="" className={`text-xl font-semibold mr-6 ${current ? 'px-3 py-2 rounded-md bg-pink-700 text-gray-50' : 'text-gray-800'}`}>
              <a>Home</a>
            </Link>
            <Link to="" className={`text-xl text-gray-800 font-semibold mr-6`}>
              <a>Baby Care</a>
            </Link>
            <Link to="" className={`text-xl text-gray-800 font-semibold mr-6`}>
              <a>Mom Care</a>
            </Link>
            <Link to="" className={`text-xl text-gray-800 font-semibold mr-6`}>
              <a>Accessories</a>
            </Link>
            <Link to="" className={`text-xl text-gray-800 font-semibold mr-6`}>
              <a>New Arrivals</a>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="w-12 h-10 bg-pink-700 text-white text-sm rounded-md mr-2">EN</button>
            <button className="w-12 h-10 bg-pink-700 text-white text-sm rounded-md mr-2">SL</button>
            <button className="w-12 h-10 bg-pink-700 text-white text-sm rounded-md mr-2">TM</button>
          </div>
        </div>
    </>
      ) : null
    }
    
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
