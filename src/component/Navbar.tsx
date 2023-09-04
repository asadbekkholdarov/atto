import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="container">
            
              <Link to="/"><img className='h-16' src="https://www.osptalliance.org/assets/1/6/atto_logo.png?627" alt="" /></Link>
            <ul>
                <li><Link to="/tashuvchilar">Tashuvchilarga</Link></li>
                <li><Link to="/yangiliklar">Yangiliklar</Link></li>
                <li><Link to="/about-us">Biz haqimizda</Link></li>
                <li><Link to="/kontakt">Kontaktlar</Link></li>
                <li><Link to="">Yo'lovchilarga</Link></li>
                <li>+998 78 140 08 08</li>
            </ul>
            <button className='bg-green-500'>Shaxsiy Kabinet</button>
        </div>
    </div>
  )
}

export default Navbar