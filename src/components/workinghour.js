import {Component} from 'react';
import styles from '../styles/workinghour.module.scss';
import logo70 from '../media/video-1.jpg'
import {CaretRightOutlined,CheckOutlined,ArrowRightOutlined } from '@ant-design/icons'

export default class Workinghour extends Component{
    render(){
        return(
            <div className={styles.container}>
                <img className={styles.image1} src={logo70} />
                <CaretRightOutlined  className={styles.circle} />
<div>
    <p style={{fontSize:"21px",color:"orangered",fontFamily:"sans-serif",marginLeft:"50px",marginTop:"12px"}}>WATCH VIDEOS</p>
    <p style={{marginTop:"10px",fontSize:"37px",fontFamily:"Forum"}}>How Can We Made</p>
    <p style={{marginTop:"5px",fontSize:"37px",fontFamily:"Forum"}}>Foods For Customers</p>
    <p style={{color:"gray",fontSize:"18px",marginTop:"8px"}}>Sit amet consectetur adipiscing elitsue risus</p>
    <p style={{color:"gray",fontSize:"18px",marginTop:"8px"}}>mauris quam adipiscing phasellus aene ante</p>
    <p style={{color:"gray",fontSize:"18px",marginTop:"8px"}}>orcirat scelerisque enim ut nulla</p>
    
    <p className={styles.paras} style={{marginTop:"50px"}}><CheckOutlined style={{backgroundColor:"#DF3F00",color:"white",fontSize:"13px",height:"14px",width:"14px",borderRadius:"50%",padding:"5px"}} />Best Way to Serve Our Foods</p>
                    <p className={styles.paras}><CheckOutlined style={{backgroundColor:"#DF3F00",color:"white",fontSize:"13px",height:"14px",width:"14px",borderRadius:"50%",padding:"5px"}} />Low Cost & Online Orders</p>
                    <button className={styles.button}>Watch More <ArrowRightOutlined /></button>
</div>
            </div>
        )
    }
}