import React from "react"

const Navbar = () =>{

    return (
        <nav>
          <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>

          <button className="login">Login</button>
      </nav>

    )

}

export default Navbar