import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
    const iconStyle = {color: "#383430", fontSize: "1.8em", marginLeft: "10"}
    const row = {marginTop: "20px", marginLeft: "200px", position: "relative"}
    return(
        <div>
        <div className="hero">
            <img src="https://www.investopedia.com/thmb/B-iMCMXBQxS1toaT1rpxMxBNht0=/2121x1414/filters:fill(auto,1)/corner-of-an-apartment-building--dubai--uae-1088862160-3aeaa90992214854896ecee148258fb9.jpg" alt="hero"/>
        </div>
        <div className="title">
            <h2>Travel With <br/> Us, Cheaply</h2>
            <p>28°C Cloudy</p>
        </div>
        <div style={row}>
            <BsArrowLeftCircle style={iconStyle}/>
            <BsArrowRightCircle style={iconStyle}/>
        </div>
        </div>
    )
}

export default Hero;