import React, { useState } from "react";
import PetInterface from "../models/Pet-interface";


function PetInfo(){
    const [pet, setPet] = useState<PetInterface>({name:"Willy", breed:"Killer Whale"});
    return(
        <div className="PetInfo">
            <h1>Confirmation</h1>
            <h2>Name: {pet.name}</h2>
            <h2>Breed: {pet.breed}</h2>
        </div>
    );
};

export default PetInfo;