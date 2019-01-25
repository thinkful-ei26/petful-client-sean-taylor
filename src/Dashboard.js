import React, { Component } from 'react' 
import Pet from './pet'; 

export default function Dashboard(props) {

const buttonClick = (pet) => {
    console.log('I have been adopted!'); 
    console.log(pet);
}
    return ( 
    <div>
        <Pet pet={props.catToAdopt} onAdoptPet={buttonClick} />
        <Pet pet={props.dogToadopt} onAdoptPet={buttonClick} />
    </div>
    )
}
