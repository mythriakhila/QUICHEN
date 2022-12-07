import { Component } from "react";
import logo1 from "../media/image-1.jpg";
import logo2 from "../media/image-2.jpg";
import styles from "../styles/subfolder.module.scss";
import {ArrowRightOutlined} from "@ant-design/icons";

export default class Subfolder extends Component{
    render(){
        return(
            <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.para1}>ABOUT QICHEN</p>
                <p className={styles.para2}>The Best Tasty &</p>
                <p className={styles.para21}>Yamee Food and Chief</p>
                <p className={styles.para21}>Based on Italiano</p>
                <p className={styles.para3}>Sit amet consectetur adipiscing elitsue risus mauris</p>
                <p className={styles.para4}>quam neque adipiscing phasellus aenean ante orcirat</p>
                <p className={styles.para4}>scelerisque enim ut nulla vestibulum velvitae ut at</p>
                <p className={styles.para4}>elementum mauris, etiam ornare diame</p>
                <button className={styles.button}>Learn More<ArrowRightOutlined style={{fontSize:"16px",color:"white"}}/></button>
            </div>
            <div><img className={styles.image1} src={logo1} /></div>
            <div><img className={styles.image2} src={logo2} /></div>
            </div>
        )
    }
}