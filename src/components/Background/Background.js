import React, {Component } from 'react'
import styles from './Background.css'

class Background extends Component {
    render(){
        console.log(styles)
        return(
            <div className={styles.background}>
                <h1>Hej</h1>                
            </div>
        )
    }
}

export default Background;