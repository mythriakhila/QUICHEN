import {Component} from "react";
import styles from "../styles/bestfood.module.scss";
import { StarFilled } from "@ant-design/icons";
import logo5 from "../media/menu-single-1.jpg";
import logo6 from "../media/thumb-1.png";
import logo7 from "../media/thumb-2.png";
import logo8 from "../media/thumb-3.png";
import logo9 from "../media/thumb-4.png";


export default class Bestfood extends Component{
    render(){
        return(
            <div className={styles.main}>
                <p style={{fontFamily:"sans_serif",color:"#DF3F00",fontSize:"30px"}}>BEST FOOD MENU</p>
                <p style={{fontFamily: "Forum",fontWeight:"300",fontSize:"45px"}}>Choose Your Best Menus</p>
            <div className={styles.container} style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"3rem"}}>
                <img style={{height:"750px"}} src={logo5}/>
                <div className={styles.imgadjust} >
                    <img  src={logo6}/>
                    <img src={logo7}/>
                    <img src={logo8}/>
                    <img src={logo9}/>

                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"130px"}}>
                    <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <a className={styles.anchor}  href="https://preview.themeforest.net/item/qichen-fast-food-restaurant-html-template/full_screen_preview/41874313?_ga=2.222330520.209265782.1669698192-501051791.1665507078&_gac=1.91265128.1669698192.Cj0KCQiA1ZGcBhCoARIsAGQ0kkoY-z5FriZti9Ah2b9xKV1hoVRCyJOWYQ7x_QqLjRBkb9HGbtRP2McaAqsYEALw_wcB">
                            Hamburger -------------------$25</a>
                            <p style={{fontSize:"20px"}}>Roasted langoustine, consommé</p>
                            <p><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/>(5k Reviews)</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <a className={styles.anchor} href="https://preview.themeforest.net/item/qichen-fast-food-restaurant-html-template/full_screen_preview/41874313?_ga=2.222330520.209265782.1669698192-501051791.1665507078&_gac=1.91265128.1669698192.Cj0KCQiA1ZGcBhCoARIsAGQ0kkoY-z5FriZti9Ah2b9xKV1hoVRCyJOWYQ7x_QqLjRBkb9HGbtRP2McaAqsYEALw_wcB">
                            Pizza ---------------------------$63</a>
                        <p  style={{fontSize:"20px"}}>Roasted langoustine, consommé</p>
                            <p><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/>(5k Reviews)</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <a className={styles.anchor} href="https://preview.themeforest.net/item/qichen-fast-food-restaurant-html-template/full_screen_preview/41874313?_ga=2.222330520.209265782.1669698192-501051791.1665507078&_gac=1.91265128.1669698192.Cj0KCQiA1ZGcBhCoARIsAGQ0kkoY-z5FriZti9Ah2b9xKV1hoVRCyJOWYQ7x_QqLjRBkb9HGbtRP2McaAqsYEALw_wcB">
                            Baked Chicken Wings -------$199</a>
                        <p  style={{fontSize:"20px"}}>Roasted langoustine, consommé</p>
                            <p><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/>(5k Reviews)</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <a className={styles.anchor} href="https://preview.themeforest.net/item/qichen-fast-food-restaurant-html-template/full_screen_preview/41874313?_ga=2.222330520.209265782.1669698192-501051791.1665507078&_gac=1.91265128.1669698192.Cj0KCQiA1ZGcBhCoARIsAGQ0kkoY-z5FriZti9Ah2b9xKV1hoVRCyJOWYQ7x_QqLjRBkb9HGbtRP2McaAqsYEALw_wcB">
                            Seafood Pizza ------------------$352</a>
                        <p  style={{fontSize:"20px"}}>Roasted langoustine, consommé</p>
                            <p><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}}/><StarFilled style={{color:"orangered"}} /><StarFilled style={{color:"orangered"}}/>(5k Reviews)</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}