import React from "react";

export default function Card(props){
    return(
        <div>
            <h1 className= "name">{props.name}</h1>
            <h3 className= "birth">{props.birth_year}</h3>
            <h3 className= "height">{props.height}</h3>
        </div>
    )
}