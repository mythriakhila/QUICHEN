import { Component } from "react";
import styles from "../styles/banner.module.scss";
import {ArrowRightOutlined} from "@ant-design/icons";
import logo3 from "../media/hero-1 (1).jpg";
import logo0 from '../media/down-arrow.png'


export default class Banner extends Component{
    render(){
        return(
            
            <div className={styles.container}>
                <div className={styles.main}>
                    <p className={styles.para1}>Crispy</p>
                    <p className={styles.para1}>Chicken</p>
                    <p className={styles.para1}>Burgers</p>
                    <p className={styles.para2}>Sit amet consectetur adipiscing Malesuada morbigrave</p>
                    <p className={styles.para2}>ullamore alesuada nec pulvinar nisle</p>
                  
                    <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
<img src={logo0} style={{height:"40px",marginTop:"35px"}}/>
                        <button className={styles.button}>Learn More<ArrowRightOutlined style={{fontSize:"16px",color:"white"}}/></button></div>
                </div>
                <div><img style={{height:"450px",width:"500px"}} src={logo3} /></div>
            </div>

            
        )
    }
}