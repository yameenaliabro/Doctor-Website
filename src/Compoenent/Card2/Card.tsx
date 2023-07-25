import {Card,Row,Col, Image} from "antd"
import  image1 from "./Img/1.jpg"
import  image2 from "./Img/2.jpg"
import  image3 from "./Img/3.webp"
function Card2(){
return(
    <div>
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
        <p>Fusce vestibulum euismod nulla sed ultrices. Praesent rutrum nulla vel sapien euismod, quis tempus dui placerat.
Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla</p> 
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
      
       <p> If you need a working contact form that submits email to your inbox, please visit our contact page for more information</p>
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
export default Card2