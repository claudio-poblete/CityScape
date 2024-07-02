import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2024 Claudio Poblete Lagos. Todos los derechos reservados.</p>
        <nav className='footer-nav'>
          <a href='https://github.com/claudio-poblete' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href='https://www.linkedin.com/in/claudio-poblete-lagos/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
