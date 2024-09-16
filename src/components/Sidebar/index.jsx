import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import logoS from '../../assets/images/logo-s2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={logoS} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#C3C3E5'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#C3C3E5'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#C3C3E5'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shahar-ishay-831762303/">
                        <FontAwesomeIcon icon={faLinkedin} color='#C3C3E5'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/shaharishay14">
                        <FontAwesomeIcon icon={faGithub} color='#C3C3E5'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shahar_ishay/?next=%2F">
                        <FontAwesomeIcon icon={faInstagram} color='#C3C3E5'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;