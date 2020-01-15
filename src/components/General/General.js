import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {getTerms} from '../../redux/reducers/generalReducer';

class General extends Component {

    componentDidMount(){
        this.props.getTerms();
    }

    render(){
        return(
            <div>
                <NavBar/>
                General Component

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