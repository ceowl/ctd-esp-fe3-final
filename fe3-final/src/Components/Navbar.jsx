import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalStates } from './utils/global.context';

const Navbar = () => {

  const {changeTheme} = useGlobalStates();

  return (
    <nav className='nav'>
      <ul>
        <li >
          <Link to="/Home">Home</Link>
          <Link to="/Favs">Favs</Link>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <button onClick={() => changeTheme()}>Change theme</button>
    </nav>
  )
}

export default Navbar