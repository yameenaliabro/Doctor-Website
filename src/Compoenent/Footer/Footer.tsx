import "./Footer.css"
import logo from "./Img/logo.png"
import faceebook from "./Img/f.webp"
import  youtube from "./Img/y.png"
import  twiter from "./Img/t.webp"
function Fotter(){
    let openfacebook =()=>{
   window.open('https://www.facebook.com/Patel.Hospital/?__tn__=%3C',"_blank")
    }
    let opentwiter = ()=>{
  window.open("https://twitter.com/patel_hospital","_blank")
    }
    let openyoutube =()=>{
    window.open("https://www.youtube.com/@PatelHospital20","_blank")
    }
return(
    <div className="back">
         <div className="first-row">
            <img src={logo}/>
            <div className="photo">
          <button onClick={openfacebook}><img src={faceebook} /></button>
          <button onClick={opentwiter}><img src={twiter} /></button>
          <button onClick={openyoutube}><img src={youtube}/></button>
          </div>
     </div>
        <div className="first-row">
      <b>About</b>
      <p>Introduction</p>
      <p>Chairman message</p>
      <p>Anual Report</p>
        </div>
        <div className="first-row">
      <b>Explore</b>
      <p>News</p>
      <p>Media</p>
      <p>Contact</p>
        </div>
        <div className="first-row">
      <b>Contact</b>
     <p>ST-18, BLOCK 4, GULSHAN-E-IQBAL, KARACHI-75300, SINDH, PAKISTAN</p>
     <p>021-38658894 Ext: 324,434</p>
    <p>021-38658894</p>
   <p>021-111174174
</p>
        </div>
    </div>
)
}
export default Fotter;