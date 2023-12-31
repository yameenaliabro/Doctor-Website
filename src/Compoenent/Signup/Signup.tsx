import { Button, Form, Input, InputRef, message, Spin } from "antd";
import { Link } from "react-router-dom";
import "./Sinin.css"
import { useRef,useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
function Sigin(){
    const[spin,setspin] = useState<boolean>(false) 
    let ref1 = useRef<InputRef>(null)
    let ref2 = useRef<InputRef>(null)
    let ref3 = useRef<InputRef>(null)
    let ref4 = useRef<InputRef>(null)
    let Signin= async()=>{
        setspin(true)
        let Name  = ref1.current!.input!.value
        let Number  = ref2.current!.input!.value
        let email  = ref3.current!.input!.value
        let password  = ref4.current!.input!.value
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
           setspin(false)
        }).catch(()=>{
            alert("something went wrong please try again")
        })
        try{
        const docRef = await addDoc(collection(db, "users"), {
            Name: Name,
            Number: Number,
          });
          message.success("your sucessfull setup ")
          setspin(false)
        }catch (e) {
          console.error("Error adding document: ", e);
        }
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
                <label color="white"> Name</label>
                <Input type="text" placeholder="Name" ref={ref1}/>
            </Form.Item>
            <Form.Item>
                <label >Number</label>
                <Input placeholder="Enter Number" ref={ref2} maxLength={11} />
            </Form.Item>
            <Form.Item>
                <label>Eneter a email Adress</label>
                <Input type="email" placeholder="Enter email Adress" ref={ref3}/>
            </Form.Item> 
            <Form.Item>
                <label>Email Password </label>
                <Input type="password" placeholder="Email Password" ref={ref4}/>
            </Form.Item>
            <Form.Item>
               <Button type="primary" block onClick={Signin}>Sign Up</Button>
            </Form.Item>
            <Form.Item>
              <Link to="/sigin"><Button type="link" block style={{
                color : "black"
               }}>Already ?Account Create in Sign in</Button></Link>
            </Form.Item>
        </Form>
        </Spin>
        </div>
    
    )
}
export default Sigin;