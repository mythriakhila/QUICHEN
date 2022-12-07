

// import { ArrowRightOutlined } from "@ant-design/icons";
// import { Component } from "react";
// import styles from "../styles/popular.module.scss";
// export default class PopularFoodCard extends Component {
//     constructor(){
//         super();
//     }
//     handleClick = ( arg )=>{
//         console.log(arg);
//     }
//     render(){
//         const { data } = this.props;
//         return(
//             <div className={styles.container}>
//             <div className={styles.main} >
               
//                 <img className={styles.image}  src={data.img}/>
//                 <p className={styles.text}>{data.text}</p>
//                 <button className={styles.button} onClick={this.handleClick.bind(this,data)}><ArrowRightOutlined/></button>
//             </div>
//             </div>
//         )
//     }
// }


import { Component } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

export default class PopularFoodCard extends Component {
    constructor() {
        super();
    }

    handleClick = (arg) => {
        console.log(arg);
    }

    render() {
        const { data } = this.props;
        return(
            <div style={{display:"grid",gridTemplateColumns:"auto auto auto", backgroundColor:"rgb(203, 79, 2)",paddingBottom:"0.7rem"}}>
            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:"120px",width:"320px", borderRadius:"10px",marginTop:"1rem",marginLeft:"2rem"}}>
               
                <img style={{marginRight:"1rem"}} src={data.img} />
                <p style={{fontFamily:"sans-serif",fontSize:"30px"}}>{data.text}</p>
                <button style={{border:"1px solid",height:"50px",width:"50px",borderRadius:"3px",marginLeft:"2rem"}} onClick={this.handleClick.bind(this,data)}><ArrowRightOutlined  /></button>
            </div>
            </div>
            
            
        )
    }
}