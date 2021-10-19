import './Item.css';
// import account from "../../assets/account.svg";


const Item = ({job}) => { /*
    function getImg() {
        const companyName = job.listedCompany;
        let backgroundImg;

        switch (companyName.toLowerCase()) {
            case "account": backgroundImg = account;
                break;
            case "theairfiltercompany": backgroundImg = theairfiltercompany;
                break;
            default: backgroundImg = "";
        }
        return backgroundImg;
    }
*/
    return (<div className="bodyGame">
        <div className="ferrisWheel">
            <div className="centerOfFerrisWheel circle"><button class="start-btn">Start My Ferris Wheel!</button></div>
            <div className="secondCenterOfFerrisWheel circle"></div>
        </div>
        <div className="allCircles circle" id="job.id">
            <p className="experienceTime">
                <i className="bi bi-calendar-check-fill"></i>
                {
                job.cabinStartYear
            }
                - {
                job.cabinEndYear
            } </p>
            <h3> {
                job.cabinTitle
            } </h3>
            <p className="experiencePlace">
                <i className="bi bi-geo-alt-fill"></i>
                {
                job.place
            }</p>
        </div>
        <div className="experienceDetails1">
            <div> {
                job.cabinDescription
            } </div>
        </div>
    </div>)
}


export default Item;
