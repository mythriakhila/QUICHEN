import {Component} from "react";
import styles from "../styles/exclusive.module.scss";
import logo10 from "../media/chef-1.jpg";
import logo11 from "../media/chef-2.jpg";
import logo12 from "../media/chef-3.jpg";
import logo13  from "../media/chef-4.jpg";
import logo14 from "../media/chef-5.jpg";
import logo15 from "../media/chef-6.jpg";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";


export default class Exclusive extends Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.main}>
<div className={styles.subcontainer}>
  
<p style={{fontFamily:"sans_serif",color:"#DF3F00",fontSize:"30px",}}>BEST FOOD MENU</p>
<p className={styles.paragraph}>Meet Our</p>
<p className={styles.paragraph}>Exclusive &</p>
<p className={styles.paragraph}>Master Chefs</p>
<div  style={{display:"flex",justifyContent:"center",gap:"10px",marginRight:"1rem",marginTop:"2rem"}}><p><CheckOutlined style={{backgroundColor:"orangered",color:"white",height:"10px",width:"10px",padding:"0.5rem",fontWeight:"800",borderRadius:"50%",fontSize:"12px"}} /></p>
<div ><p style={{fontSize:"20px"}}>25 Years of Experience in Restaurant</p>
   <p style={{fontSize:"20px"}}>  Services in USA</p></div>
   </div>
<div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"1rem"}}><p><CheckOutlined style={{backgroundColor:"orangered",color:"white",height:"10px",width:"10px",padding:"0.5rem",fontWeight:"800",borderRadius:"50%",fontSize:"12px"}} /></p>
<div ><p style={{fontSize:"20px"}}>Any Kind Of Food Made For Customer</p>
<p style={{fontSize:"20px"}}> and So Much Yamee $ Testy</p></div>
</div>
<p  style={{fontFamily:"sans-serif",fontSize:"18px",marginTop:"2rem"}}>Sit amet consectetur adipiscing elitsue</p>
<p style={{fontFamily:"sans-serif",fontSize:"18px",marginTop:"0.5rem"}}>risus mauris quam adipiscing phasellus</p>
<p style={{fontFamily:"sans-serif",fontSize:"18px",marginTop:"0.5rem"}}>aene ante orcirat scelerisque enim ut</p>
<p style={{fontFamily:"sans-serif",fontSize:"18px",marginTop:"0.5rem"}}>nulla</p>
<button className={styles.button1} style={{height:"40px",border:"none",width:"230px",borderRadius:"5px",marginTop:"1rem"}}>
    <a className={styles.anc}  style={{textDecoration:"none",fontSize:"18px"}}  href="themeforest.net/item/qichen-fast-food-restaurant-html-template/full_screen_preview/41874313?_ga=2.222330520.209265782.1669698192-501051791.1665507078&_gac=">
    BECOME A CHEF<ArrowRightOutlined style={{marginLeft:"10px"}}/></a></button>
</div>
<div className={styles.grid}>
    <img className={styles.image} src={logo10}/>
    <img className={styles.image} src={logo11}/>
    <img className={styles.image} src={logo12}/>
    <img className={styles.image} src={logo13}/>
    <img className={styles.image} src={logo14}/>
    <img className={styles.image} src={logo15}/>
</div>
                </div>

            </div>
        )
    }
}