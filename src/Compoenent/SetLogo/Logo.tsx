import { Image } from "antd";
import logo from "./Img/logo.png"
import "./Logo.css"
function Logo(){
return(
    <div className="logo">
        <Image  src={logo} 
         style={{
            width:100,          
         }}/>
    </div>
)
}
export default Logo;