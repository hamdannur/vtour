import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "../components/Menu"

function Header({ siteTitle }) {

    const [isExpanded, toggleExpansion] = useState(false)



    return (
        <nav className="sticky top-0 z-30 flex items-center justify-between flex-wrap py-6 px-8 sm:px-24 bg-gray-900 dark:bg-custom border-b-2 dark:border-gray-700 border-gray-300 transition-all duration-300">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link
                    to={`/`}
                    href="#responsive-header"
                    className="block mr-4 text-xl lg:inline-block lg:mt-0 dark:text-gray-50 text-gray-50"
                >
                    {/* {siteTitle} */}
                    <img src={`https://virtualtour.sumedangkab.go.id/static/d8ce6a11769dc260af261406cac2ec6b/9d78c/logo_v.webp`} alt="" srcset="" className="w-48" />
                </Link>
            </div>

            <div className=" w-full block flex-grow lg:flex lg:items-center lg:w-auto">

                <div className="inline-block text-sm -ml-5 py-2">


                    <img src={`https://virtualtour.sumedangkab.go.id/static/d8ce6a11769dc260af261406cac2ec6b/9d78c/logo_v.webp`} alt="" srcset="" className="w-48" />
                    <Menu pageWrapId={"page-wrap"} />

                </div>

            </div>
        </nav>
    )
}

export default Header
