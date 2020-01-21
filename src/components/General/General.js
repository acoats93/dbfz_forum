import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './General.css';
import {connect} from 'react-redux';
import {Link, Element} from 'react-scroll';
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
        if(this.state.menuStatus === 'menu_open'){
            this.setState({menuStatus: 'menu_closed'})
        }else{
            this.setState({menuStatus: 'menu_open'})
        }
    }

    render(){
        // console.log(this.props.terms);
        return(
            <div id='whole_general_component'>
                <NavBar/>
                <div id='menu_div'>
                    <img 
                    onClick={this.menuClick}
                    src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                    id='menu_button'
                    alt='menu_icon'/>
                    <div id={this.state.menuStatus}>{this.props.terms.map(term => {
                        return(
                            <div key={term.term_id}>
                                {/* <Link to={`#${term.term_name}`}>{term.term_name}</Link> */}
                                <Element
                                    activeClass="active"
                                    to={term.term_name}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    >{term.term_name}
                                </Element>
                                <br/>
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