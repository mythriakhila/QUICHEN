import {Component} from 'react';

import styles from "../styles/subscribe.module.scss";
import { MailOutlined,FacebookFilled,TwitterOutlined,YoutubeOutlined,InstagramOutlined } from '@ant-design/icons';

export default class Subscribe extends Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.paras}>Free delivery for all orders over $50. Order your food now!</div>
                <div style={{fontSize:"18px",fontFamily:"sans-serif",display:"flex",justifyContent:"center",gap:"4px"}}>
                    <MailOutlined />Subscribe & Get 10% Off</div>
            <div className={styles.designs}>
                <FacebookFilled className={styles.design1}/>
                <TwitterOutlined className={styles.design1}/>
                <YoutubeOutlined className={styles.design1}/>
                <InstagramOutlined className={styles.design1} /></div>    
            </div>
        )
    }
}