import { Button, Form, Input, InputRef,  Spin } from "antd";
import { useRef,useState } from "react";
import "./Signin.css"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth} from "../Firebase/Firebase";
import { useParams, useRoutes } from "react-router-dom";
function Signup(){
    const[spin,setspin] = useState<boolean>(false) 
    let ref3 = useRef<InputRef>(null)
    let ref4 = useRef<InputRef>(null)
    let Googleprovider = new GoogleAuthProvider()
    let Signin= async ()=>{
        setspin(true)
        let email  = ref3.current!.input!.value
        let password  = ref4.current!.input!.value
     signInWithEmailAndPassword(auth,email,password).then(()=>{
           setspin(false)
        }).catch(()=>{
            alert("something went wrong please try again")
        })
    }
        let Goggle =  async()=>{
   signInWithPopup(auth,Googleprovider)
        }
    return(
        <div className="container">
          <Spin spinning={spin}>
        <Form style={{
            maxWidth:400 ,
            backgroundColor  :"#efefef",
            padding:20,
            marginBottom :100,
        }}>
            <Form.Item>
                <label>Eneter a email Adress</label>
                <Input type="email" placeholder="Enter email Adress" ref={ref3}/>
            </Form.Item> 
            <Form.Item>
                <label>Email Password </label>
                <Input type="password" placeholder="Email Password" ref={ref4}/>
            </Form.Item>
            <Form.Item>
               <Button type="primary" block onClick={Signin}>Sign In</Button>
            </Form.Item>
            <Form.Item>
               <Button type="primary" block onClick={Goggle}>SigninGoogleAccount</Button>
            </Form.Item>
        </Form>
        </Spin>
        </div>

    )
}
export default Signup;