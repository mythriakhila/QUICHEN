import {Component} from "react";
import Header from "./components/header"
import Popular from "./components/popular";
import Subfolder from "./components/subfolder";
import Banner from "./components/banner";
import Bestfood from "./components/bestfood";
import Exclusive from "./components/exclusive";
import Topheader from "./components/topheader";
import Workinghour from "./components/workinghour";
import Subscribe from "./components/subscribe";
import Images from "./components/images";
import Footer from "./components/footer";
import Reviews from "./components/foodreviews";
import Working from "./components/subfolders11";
import Booking from "./components/tablesub";
class App extends Component{
  render(){
    return(
      <div>
        <Topheader/>
        <Subscribe/>
        <Header/>
        <Banner/>
        <Popular/>
        <Subfolder/>
        <Bestfood/>
        <Exclusive/>
        <Workinghour/>
     <Working/>
        <Booking/>
       <Reviews/>
        <Images/>
        <Footer/>
       
      </div>
    )
  }
}

export default App;
