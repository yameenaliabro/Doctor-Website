import "./Timeline.css"
import {Card,Row,Col, Image} from "antd"
import image1 from "./Img/1.jpg"
import image2 from "./Img/2.jpg"
import image3 from "./Img/3.jpg"
function Timeline(){
return(
    <div>
   <div className="heading">
   <h1>Our Timeline</h1>
   </div>
    <div className="content">
  <Row>  
    <Col span={8} 
    style={
        {
            padding:40
        }
    }>
      <Card bordered={false} hoverable>
        <Image src={image1}/>

          <p>Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh</p>
      </Card>
    </Col>
    <Col span={8}
      style={
        {
            padding:40
        }
    }>
      <Card bordered={false} hoverable>
    <Image src={image2}/>
       <p>You are fully permitted to use this template for your commercial or personal website. Nulla elementum nisi sed bibendum tempor. Vestibulum sed ipsum leo. Nullam vehicula lectus tortor, nec luctus consequat </p>
      </Card>
    </Col>
    <Col span={8}
      style={{
            padding:40
      }}>
      <Card  bordered={false} hoverable>
        <Image src={image3}/>
        <p>Phasellus eleifend, urna interdum congue viverra, arcu neque ultrices ligula, id pulvinar nisi nibh et lacus. Vivamus gravida, ipsum non euismod tincidunt, sapien elit fermentum mi, quis iaculis enim ligula at arc</p>
      </Card>
    </Col>
  </Row>
      </div>
    </div>
)
}
export default Timeline;