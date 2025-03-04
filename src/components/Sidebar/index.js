import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faGraduationCap, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

import { faLinkedin,faGithub,fa} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className="sub-logo" src={LogoSubtitle} alt='slobodon' />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://github.com/medis8731"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://ca.linkedin.com/in/maddie-salehpoor"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://uwaterloo.ca/mechatronic-vehicle-systems-lab/our-people"
                    >
                        <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar