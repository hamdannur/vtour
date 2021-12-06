import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="font-normal antialiased">
      <main>{children}</main>
    </div>
  )
}

export default Layout
