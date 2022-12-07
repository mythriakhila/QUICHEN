import { Component } from "react";
import styles from "../styles/tablesub.module.scss";
import { UserOutlined,ArrowRightOutlined } from '@ant-design/icons';
import { Input, TimePicker } from 'antd';
import { DatePicker, Space } from 'antd';

export default class Booking extends Component {
    render() {
        const { RangePicker } = DatePicker;
        return (
            <div className={styles.container}>
                <div>
                    <img className={styles.img} src="https://demo.webtend.net/html/qichen/assets/images/contact/contact-1.jpg" />
                </div>
                
                <div className={styles.right}>
                <h3 style={{fontSize:"20px",fontFamily:"sans-serif",display:"flex",justifyContent:"center",color:"#DF3F00"}}>BOOKING TABLE</h3>
                    <p style= {{fontSize:"50px",fontFamily:"Forum",fontWeight:"300",display:"flex",justifyContent:"start",marginTop:"1rem",marginLeft:"5rem"}}>Make A Reservations</p>
                    <p style= {{fontSize:"20px",display:"flex",justifyContent:"start",marginTop:"1rem",marginLeft:"5rem"}}>Sit amet consectetur adipiscing elitsue risus </p>
                    <p style= {{fontSize:"20px",display:"flex",justifyContent:"start",marginTop:"1rem",marginLeft:"5rem"}}>mauris adipiscing phasellus aene ante orcirat</p>
                    <div className={styles.Input}>
                       <Input className={styles.inp} size="large"   placeholder="Person"  prefix={<UserOutlined style={{color:"black"}}/>} />
                  
                    </div>
                    <div className={styles.Input}>
                        <Space direction="vertical" size={20}>
                            <RangePicker  className={styles.inp} style={{color:"black"}}/>
                        </Space>
                    </div>
                    <div className={styles.Input}>

                        <TimePicker.RangePicker  className={styles.inp} style={{color:"black"}}/>
                    </div>
                    <div style= {{display:"flex",justifyContent:"start",marginTop:"1rem"}}>
                    <p className={styles.btn}>BOOK A TABLE<ArrowRightOutlined style={{fontSize:"20px",color:"white",marginLeft:"0.2rem"}}/></p>
                    </div>
                </div>
            </div>
        )
    }
}