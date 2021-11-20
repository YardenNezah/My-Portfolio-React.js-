import './Item.css';

const Item = ({job}) => {
    let cabin = "num" + job.id;
    return (
        <div className="ferris-wheel">
            <div className="wheel">
                <div className="center">
                    <div className="line">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <button className="start-btn">Click To Start My Wheel!</button>
                </div>
                <div className="second-center"></div>

                <div className="all-cabins" id={cabin}>
                    <p className="experience-time">
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
                    <p className="experience-place">
                        <i className="bi bi-geo-alt-fill"></i>
                        {
                        job.place
                    }</p>
                    <div className="experience-details">
                        <div> {
                            job.cabinDescription
                        } </div>
                    </div>
                </div>
            </div>
            <div class="stand"></div>
        </div>
    )
}


export default Item;
