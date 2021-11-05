import Nav from "./Nav";
import CONTACT_SECTION from '../../Data';


const Hire = () => {
    return (
        <div>
            <h1>
                My Details:
            </h1>

            <Nav></Nav>
            <div>
                <h2>{
                    CONTACT_SECTION.title
                }</h2>
                <h3>{
                    CONTACT_SECTION.subtitle
                }</h3>
                <p>My linkedin: {
                    CONTACT_SECTION.linkedin
                }</p>
                <p>My Email: {
                    CONTACT_SECTION.email_address
                }</p>
                <p>My Phone: {
                    CONTACT_SECTION.number
                }</p>
            </div>

        </div>
    )

}

export default Hire;
