import image1 from "./Img/1.jpg"
import image2 from "./Img/2.jpg"
import {Image} from "antd"
import "./Middle.css"
function MiddleImg(){
return(
    <div className="set-img">
        <Image src={image1} style={{
            width:300
        }} />
        <Image src={image2} 
        style={{
            width:300
        }}/>

    </div>
)
}
export default MiddleImg;