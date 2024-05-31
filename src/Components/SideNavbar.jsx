import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SideNavbar.css'
import routes from '../Utils/Route'

function SideNavbar() {
  return (
    <div className='side-navbar'>
      <Nav defaultActiveKey='/' className='flex-column'>
        {routes.map((route, index) => (
          <Nav.Link as={Link} to={route.path} key={index}>
            <i className={route.icon}></i>
            <span className='link-text'>{route.name}</span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  )
}

export default SideNavbar
