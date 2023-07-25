import { Button, Form, Input,Typography} from "antd";
import TextArea from "antd/es/input/TextArea";
import "./Appominet.css"
function Appoiment(){
    const {Title} = Typography;
return(
    <div className="container">
        <Title level={2} style={{
            marginBottom:50,
            color: "blue"
        
        }}>REQUEST APPOIMENTS</Title>
        <Form style={{
            maxWidth:400 ,
            backgroundColor:"rgb(217, 0, 255)",
            padding:20,
            marginBottom :100,
        }}>
            <Form.Item
            style={{
                color : "white"
            }}>
                <label color="white"> Name</label>
                <Input type="text" placeholder="Name"/>
            </Form.Item>
            <Form.Item
             style={{
                color : "white"
            }}>
                <label >Number</label>
                <Input type="Number" placeholder="Enter Number"/>
            </Form.Item>
            <Form.Item
             style={{
                color : "white"
            }}>
                <label>Eneter a email Adress</label>
                <Input type="email" placeholder="Enter email Adress"/>
            </Form.Item> 
            <Form.Item
             style={{
                color : "white"
            }}>
                <label>Departements</label>
                <Input type="number" placeholder="Departements"/>
            </Form.Item>
            <Form.Item
             style={{
                color : "white"
            }}>
                <label>Doctors</label>
                <Input type="number" placeholder="Doctors"/>
            </Form.Item>
            <Form.Item
             style={{
                color : "white"
            }}>
                <label>Message</label>
                <TextArea placeholder="Message" rows={5} maxLength={60}></TextArea>
            </Form.Item>
            <Form.Item>
               <Button type="primary" block>SubmitNow</Button>
            </Form.Item>
        </Form>
    </div>
)
}
export default Appoiment;