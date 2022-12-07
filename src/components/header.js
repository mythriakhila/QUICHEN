

import { Component } from "react";
import styles from "../styles/header.module.scss"
 import logo from "../media/logo-white.png";
import { DownOutlined,SearchOutlined,TabletOutlined,ArrowRightOutlined} from "@ant-design/icons"
class Header extends Component{
    render(){
        return(
            <div className={styles.container}> 
               <div>
               <img src={logo} style={{height:"50px",width:"100px",backgroundColor:"#DF3F00",fontSize:"9px"}}/>
                    <ul>
                        <li>Home<DownOutlined style={{fontSize:"12px",marginLeft:"10px"}}/></li>
                        <li>Menu<DownOutlined style={{fontSize:"12px",marginLeft:"10px"}}/></li>
                        <li>About</li>
                        <li>Shop<DownOutlined style={{fontSize:"12px",marginLeft:"10px"}}/></li>
                        <li>Blog<DownOutlined style={{fontSize:"12px",marginLeft:"10px"}}/></li>
                        <li>Pages<DownOutlined style={{fontSize:"12px",marginLeft:"10px"}}/></li>
                      <li><SearchOutlined /></li>
                      {/* <li><TabletOutlined /></li> */}
                      <li>000(123)456 89</li>
                    </ul>
                </div>
               <div>
               <p></p>
                <button className={styles.buttons} style={{backgroundColor:"#DF3F00",height:"60px",width:"180px",borderRadius:"5px",color:"white",padding:"1rem",fontSize:"16px",border:"1px #DF3F00"}}>
                  <a className={styles.anc2} href="https://preview.themeforest.net/item/qichen-fast-food-restaurant-html-template/full_screen_preview/41874313?_ga=2.222330520.209265782.1669698192-501051791.1665507078&_gac=1.91265128.1669698192.Cj0KCQiA1ZGcBhCoARIsAGQ0kkoY-z5FriZti9Ah2b9xKV1hoVRCyJOWYQ7x_QqLjRBkb9HGbtRP2McaAqsYEALw_wcB"> 
                    Book a Table<ArrowRightOutlined style={{fontSize:"16px",marginLeft:"5px"}} /></a> </button>
               </div>

            </div>
        )
    }
}

export default Header;

