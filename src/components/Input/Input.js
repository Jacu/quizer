import * as actions from '../../store/actions/quiz'
import React, { Component } from 'react';
import styles from './Input.css';
import { connect } from 'react-redux';

class Input extends Component {
    
    handleChange = event => {
        this.props.changeSetting(this.props.name,event.target.value)              
    }

    render() {
        const options = this.props.options.map(option =>
            <option                
                key={option}
                value={option}>
                {option}
            </option>
        )

        return (
            <div className={styles.Input}>
                <div className={styles.Label}>{this.props.label}</div>
                <select onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeSetting: (setting, value) => dispatch(actions.setSetting(setting, value))
    }
}


export default connect(null,mapDispatchToProps)(Input);