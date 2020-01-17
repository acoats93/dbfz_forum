import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './General.css';
import {connect} from 'react-redux';
import {getTerms} from '../../redux/reducers/generalReducer';

class General extends Component {
    constructor(){
        super()
        this.state = {
            menuStatus: 'drop-down-menu'
        }
    }

    componentDidMount(){
        this.props.getTerms();
    }

    render(){
        console.log(this.props.terms);
        return(
            <div id='whole_general_component'>
                <NavBar/>
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