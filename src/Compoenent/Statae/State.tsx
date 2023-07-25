import { useEffect,useState} from 'react';
 import { getAuth, onAuthStateChanged,User} from 'firebase/auth';
import { ConfigProvider, Spin } from 'antd';  
import { app } from '../Firebase/Firebase';
import Home from '../Home/Home';
import Sigin from '../Signup/Signup';
   function State(){ 
    let auth = getAuth(app);
  const[user,setsuse] = useState<string | null | User>(null)
  const [loading, setLoading] = useState(true);
   useEffect(()=>{
       onAuthStateChanged(auth, user  =>{
       if(user){
       setsuse(user);
       }
       else{
     setsuse(null);  
       }
       setLoading(false)
         })
        },[])
  if(loading){
    return (
      <div  style={{
        display:"flex",
        justifyContent : 'center',
        alignItems : "center",
        textAlign : "center",
        color  : "green",
        height : 700,
      }}>
          <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Spin size="default"/>
  </ConfigProvider>
      </div>
    )
  }
 if(user === null){   
  return(
     <div>  
      <Sigin/>
     </div>
  )
}   
return(
    <div>
      <Home />
      </div>
)
  }
 export default State;