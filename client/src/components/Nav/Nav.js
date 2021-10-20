import './Nav.css';
import Skills from './Skills';

const Nav = () => {
    return (<nav>
        <ul>
            <a href="#" className="nav-categories">
                Home
            </a>
            <a href="#" className="nav-categories">
                My Projects
            </a>
            <a href="" className="nav-categories">
                My Skills
            </a>
             <a href="#" className="nav-categories"> 
                Contact Me
            </a>
            <a href="#" className="nav-categories">
                Hire Me
            </a>
        </ul>
        <br></br>
    </nav>)
}
export default Nav;
