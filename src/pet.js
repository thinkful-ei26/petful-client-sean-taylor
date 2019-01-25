import React from 'react'; 

export default function Pet(props) {
    return (
    <div>
        <section className="animalSection">
            <header>
                <h1>{props.pet.name}</h1>
                <img src={props.pet.imageURL} alt={props.pet.imageDescription} />              
            </header>
            <main className="animalInformation">
                    <dl>
                        <dt className="sex">{props.pet.sex}</dt>
                        <dt className="age">{props.pet.age}</dt>
                        <dt className="breed">{props.pet.breed}</dt>
                        <dt className="story">{props.pet.story}</dt>
                    </dl>
                    <button type="submit" onClick={()=> props.onAdoptPet(props.pet)} className="adoptButton">Adopt</button>
            </main>
        </section>
    </div>
    )
}