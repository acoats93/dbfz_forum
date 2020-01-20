import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import './Home.css'


class Home extends Component {
    render(){
        return(
            <div id='whole_homepage'>
                <NavBar/>
                <div id='sections_section'>
                    <section id='welcome_message'>
                        <p>Welcome to Korin Tower!</p>
                    </section>
                    <br></br>
                    <section id='links_section'>
                        <Link id='general_link' to='/general'>General Fighting Game Info!</Link>
                        <br></br>
                        <Link id='characters_link' to='/characters'>Character List!</Link>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;