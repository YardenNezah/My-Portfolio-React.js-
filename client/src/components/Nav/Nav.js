import './Nav.css';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Hire from './Hire';
import Item from './../Container/Item';
import {SOCIAL_MEDIA_SECTION, SKILLS_SECTION, PROJECTS_SECTION, CONTACT_SECTION} from '../../Data';

const Nav = () => { 
    const viewAbout = SOCIAL_MEDIA_SECTION.display;
    const viewProjects = PROJECTS_SECTION.display;
    const viewSkills = SKILLS_SECTION.display;
    const viewHire = CONTACT_SECTION.display;

    return (
        <nav>
            <ul>
                <a href="#" className="nav-categories">
                    Home
                </a>
                {
                viewAbout && (
                    <a href="#About" className="nav-categories">About Me</a>
                )
            }
                {
                viewProjects && (
                    <a href="#Projects" className="nav-categories">
                        My Projects
                    </a>
                )
            }
                {
                viewSkills && (
                    <a href="#Skills" className="nav-categories">
                        My Skills
                    </a>
                )
            }
                {
                viewHire && (
                    <a href="#Hire" className="nav-categories">
                        Hire Me
                    </a>
                )
            } </ul>
            <br></br>
        </nav>
    )
}


export default Nav;
