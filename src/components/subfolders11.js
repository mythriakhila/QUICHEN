import { Component } from "react";
import logo from "../media/hour-bg-1.png"
import styles from "../styles/subfolders11.module.scss";

export default class Working extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.right}>
                   <h3 style={{fontSize:"22px",fontWeight:"300",display:"flex",justifyContent:"center",color:"#DF3F00",fontFamily:"sans-serif"}}>WORKING HOUR</h3>
                   <p className={styles.font} style= {{fontSize:"40px",display:"flex",justifyContent:"center",marginTop:"30px"}}>Enjoy Our Foods From </p>
                   <p className={styles.font} style={{fontSize:"40px",display:"flex",justifyContent:"center"}}>6 Days In a Week</p>
                   <p className={styles.date} >Monday - Friday ----------- 09am-6pm</p>
                   {/* <img className={styles.bg} src={logo}/> */}
                   <p className={styles.date}>Saturday ---------------------- 08am-7pm</p>
                   <p className={styles.date}>Sunday -------------------------- Closed</p>
                </div>
                <div className={styles.left}>
                    <img className={styles.img} src="https://demo.webtend.net/html/qichen/assets/images/bg/hours-bg-1.jpg "/>
                </div>
            </div>
        )
    }
}