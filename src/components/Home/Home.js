import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';


class Home extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                Home Component
                <br></br>
                <Link to='/general'>General Fighting Game Info!</Link>
                <br></br>
                <Link to='/characters'>Character List!</Link>
            </div>
        )
    }
}

export default Home;