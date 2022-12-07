import {Component} from "react";
import logo20 from "../media/images.png"
import styles from "../styles/topheader.module.scss";


export default class Topheader extends Component{
    render(){
        return(
            <div className={styles.main}>
              <a href="https://themeforest.net/item/qichen-fast-food-restaurant-html-template/41874313?_ga=2.50067744.725537593.1669699040-1511971694.1657782765">
                <img style={{width:"150px",height:"20px",padding:"0.8rem"}} src={logo20}/></a>
                <button style={{width:"80px",height:"40px",borderRadius:"5px",backgroundColor:"green"}}><a style={{color:"white",textDecoration:"none"}} href="https://themeforest.net/checkout/90633640/create_account?_ga=2.245627906.725537593.1669699040-1511971694.1657782765">BUY NOW</a></button>
            </div>
        )
    }
}