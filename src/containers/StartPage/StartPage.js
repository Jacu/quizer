import React, { Component } from 'react';
import styles from './StartPage.css'

class StartPage extends Component {

    render() {
        return (
            <div className={styles.StartPage}>
                <h1>Quizer</h1>
                <p>Quiz generator with use of Trivia API opentdb.com</p>
                <p>created by Jacek Smetek</p>
                <div className={styles.settings}>
                    <ul>
                        <li>
                            Ilosc pytan
                            <br />
                            <input id="number" type="number"/>
                        </li>
                        <li>
                            kategoria<br />
                            <select>
                                <option value="kino">kino</option>
                                <option value="świat">świat</option>
                                <option value="ogólne">ogólne</option>
                            </select>
                        </li>
                        <li>poziom trudnosci<br />
                            <select>
                                <option value="łatwe">łatwe</option>
                                <option value="srednie">srednie</option>
                                <option value="trudne">trudne</option>
                            </select></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default StartPage;