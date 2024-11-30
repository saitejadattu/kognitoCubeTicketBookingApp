import "./index.css"
import {Link} from "react-router-dom"
import React from 'react'

const NavBar = () => {
  return (
    <div className="nav-container">
        <Link className="nav-buttons" to="/">TicketBooking</Link>
    </div>
  )
}

export default NavBar