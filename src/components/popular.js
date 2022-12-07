
import { Component } from "react";
import PopularFoodCard from "./popularFoodCard";


const data = [
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-1.png",
        text: "Pizza"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-2.png",
        text: "Burger"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-3.png",
        text: "Bread"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-4.png",
        text: "Seafoods"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-5.png",
        text: "Coffee"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-6.png",
        text: "Chicken"
    }
]
export default class Popular extends Component {
    constructor() {
        super();
        this.state = {
            value: data
        }
    }
    render(){
        return (
            <div>
                <div style={{backgroundColor:"rgb(203, 79, 2)"  ,paddingBottom:"1rem",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",color:"white"}}>
                <p style={{fontFamily:"sans-serif",fontSize:"20px",marginTop:"20px"}}>Popular Food Options</p>
                <p style={{fontFamily:"sans-serif",fontSize:"40px",height:"40px",marginTop:"40px"}}>Best Category Foods Menu</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
                {this.state.value.map(e => {
                    return(

                        <PopularFoodCard data={e}/>
                    )
                })}
            </div>
            </div>
        )
    }
}