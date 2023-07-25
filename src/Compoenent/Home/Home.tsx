import Appoiment from "../Appoiment/Appominet"
import Card2 from "../Card2/Card"
import Fotter from "../Footer/Footer"
import Heading from "../Heading/Heading"
import Navbar from "../Layout/Layout"
import MiddleImg from "../MiddleImg/Middle"
import Patient from "../Patient/Patient"
import Logo from "../SetLogo/Logo"
import Slider from "../Slider/Slider"
import Timeline from "../Timeline/Timeline"
import "./Home.css"
function Home(){
return(
    <div>
        <div className="set-navbar">
        <Logo/>
        <Navbar/>
        </div>
        <Slider/>
        <Heading/>
        <MiddleImg/>
        <Timeline/>
        <Card2/>
        <Patient/>
        <Appoiment/>
       <Fotter/>
    </div>
)
}
export default Home