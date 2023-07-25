import { Button, Menu } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import "./Layout.css"
function Navbar(){
    let signout = ()=>{
        signOut(auth);
    }
return(
    <div className="set-layout">
        <Menu mode="horizontal"
        items={[{
            label : "Home",
            key:"home"
        },
        {
            label : "About",
            key:"about"
        },{
            label : "ContactUs",
            key:"contactus"
        },{
            label : "Order",
            key:"order"
        }]}
        />
        <Button onClick={signout} type="primary" style={{
            marginTop : 10,
            marginLeft : 120
        }}>SignOut</Button>
    </div>
)
}
export default Navbar;