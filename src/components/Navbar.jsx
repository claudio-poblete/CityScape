import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar__logo-container'>
        <Link to='/' className='navbar__logo'>
          CityScape
        </Link>
      </div>
      <ul className='navbar__list-container'>
        <Link to='/' className='navbar__list-link'>
          Inicio
        </Link>
        <Link to='/favorites' className='navbar__list-link'>
          Favoritos
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
