import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Pet from './pet'; 
import {fetchCat, fetchDog, deleteCat, deleteDog} from './actions';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    buttonClick(pet) {
        if (pet.petType === 'cat') this.props.dispatch(deleteCat());
        else this.props.dispatch(deleteDog());
    }

    componentDidMount() {
        console.log('these dispatched');
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
        console.log(this.props);
        return ( 
        <div>
            <Pet pet={this.props.catToAdopt} onAdoptPet={this.buttonClick} />
            <Pet pet={this.props.dogToAdopt} onAdoptPet={this.buttonClick} />
        </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return ({
    catToAdopt: state.cat.data,
    dogToAdopt: state.dog.data
    })
};
export default connect(mapStateToProps)(Dashboard);
