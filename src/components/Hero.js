import { BsArrowLeftCircle, BsArrowRightCircle, BsGeoAlt } from "react-icons/bs";

const Hero = () => {
    const iconStyle = { color: "#383430", fontSize: "1.8em", marginLeft: "10" }
    const row = { marginTop: "20px", marginLeft: "200px", position: "absolute" }
    const browse = { marginButton: "45", width: "75%", height: "130px", backgroundColor: "red", display: "flex", borderRadius: "20px", position: "absolute", justifyContent: "center" }
    const colOne = { display: "flex", alignItems: "flex-end" }

    const container = { display: "flex", justifyContent: "center" }
    const location = { display: "flex", alignItems: "center", marginRight: "30px" }
    const hairline = { width: "3px", height: "50px", backgroundColor: "#383430", borderRadius: "2px" }

    return (
        <div>
            <div className="hero">
                <img src="https://raw.githubusercontent.com/jauharnotes/ezstay-web-reactjs/master/public/Hero-Picture.png" alt="hero" />
            </div>
            <div className="title">
                <h2>Travel With <br /> Us, Cheaply</h2>
                <p>28°C Cloudy</p>
            </div>
            <div style={row}>
                <BsArrowLeftCircle style={iconStyle} />
                <BsArrowRightCircle style={iconStyle} />
            </div>
            <div style={container}>
                <div style={browse}>
                    <div style={location}>
                        <div className="row-1">
                            <p>Location</p>
                            <form>
                                <input type="text" name="name" placeholder="Your Destination" />
                            </form>
                        </div>
                        <div style={colOne}>
                            <BsGeoAlt />
                            <span style={hairline}></span>
                        </div>
                    </div>
                    <div className="activity">
                    </div>
                    <div className="date">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;