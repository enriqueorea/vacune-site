import React, {useState} from 'react'
import { PrimaryBtn } from '..';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <a href="#"><h1>vaccination</h1></a>
      </div>
      <div className="app__navbar-content">
        <ul className="app__navbar-links">
          {['database', 'education', 'news', 'regulation'].map(link =>(
            <li key={`link-${link}`} className="app__flex p-text">
              <a href={`#${link}`}>{link}</a>  
            </li>
          ))}  
        </ul>
        <PrimaryBtn title='hoax buster'/>  
      </div>
    </nav>
  )
}

export default Navbar