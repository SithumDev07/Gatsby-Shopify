/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
//  import "./layout.css"
 
 const Layout = ({ children, onlyUpper = true }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Header onlyUpper={onlyUpper} siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div>
         <main>{children}</main>
         <footer className="mt-5 text-center">
           © Baby Care Premium {new Date().getFullYear()}
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 