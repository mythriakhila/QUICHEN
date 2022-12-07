import {Component} from 'react';
import styles from '../styles/images.module.scss';
import logo50 from '../media/insta-1.jpg';
import logo51 from '../media/insta-2.jpg';
import logo52 from '../media/insta-3.jpg';
import logo53 from '../media/insta-4.jpg';
import logo54 from '../media/insta-5.jpg';
import logo55 from '../media/insta-6.jpg';
import logo56 from '../media/insta-7.jpg';
import logo57 from '../media/insta-8.jpg';
import logo58 from '../media/insta-9.jpg';
import logo59 from '../media/insta-10.jpg';
import logo60 from '../media/insta-11.jpg';
import logo61 from '../media/insta-12.jpg';

export default class Images extends Component{
    render(){
        return(
            <div className={styles.container}>
               
                <img src={logo50} className={styles.image}/>
                <img src={logo51} className={styles.image}/>
                <img src={logo52} className={styles.image}/>
                <img src={logo53} className={styles.image}/>
                <img src={logo54} className={styles.image}/>
                <img src={logo55} className={styles.image}/>
                <img src={logo56} className={styles.image}/>
                <img src={logo57} className={styles.image}/>
                <img src={logo58} className={styles.image}/>
                <img src={logo59} className={styles.image}/>
                <img src={logo60} className={styles.image}/>
                <img src={logo61} className={styles.image}/>

            </div>
        )
    }
}