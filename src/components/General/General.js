import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './General.css';
import {connect} from 'react-redux';
import {getTerms} from '../../redux/reducers/generalReducer';

class General extends Component {
    constructor(){
        super()
        this.state = {
            menuStatus: 'menu'
        }
    }

    componentDidMount = () => {
        this.props.getTerms();
    }

    menuClick = () => {
        if(this.state.menuStatus === 'menu_closed'){
            this.setState({menuStatus: 'menu_open'})
        }else{
            this.setState({menuStatus: 'menu_closed'})
        }
    }

    render(){
        // console.log(this.props.terms);
        return(
            <div id='whole_general_component'>
                <NavBar/>
                <div id='menu_div'>
                    <img 
                    onClick={console.log('clicked')}
                    src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                    id='menu_button'
                    alt='menu_icon'/>
                    <div id={this.state.menuStatus}>{this.props.terms.map(term => {
                        return(
                            <div key={term.term_id}>
                                <p>{term.term_name}</p>
                            </div>
                        )
                    })}</div>
                </div>
                <div>
                    <div>{this.props.terms.map(term => {
                        return(
                            <div key = {term.term_id} className='term_container'>
                                <h1 className='term_name'>{term.term_name}</h1>
                                <h2 className='term_info'>{term.term_info}</h2>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        terms: reduxState.generalReducer.terms
    }
}

export default connect(mapStateToProps, {getTerms})(General);