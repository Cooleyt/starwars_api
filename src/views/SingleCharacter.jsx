import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const SingleCharacter = (props) => {
    // const [type, setType] = useState("");
    // const [id, setId] = useState();
    const [data, setData] = useState({});
    const { type, id } = useParams();


    useEffect(() => {        
        axios.get(`https://swapi.dev/api/${type}/${id}/`)
        .then(
        res => {
        console.log(id);
        setData(res.data);
        }
        ).catch(err => console.log("i am here ", err ));
    }, [id])


    return(
        <>

            <div className="text-center mt-4" >
            { 
                type === "people" ? 
            <> 
        
                <h4>{data.name}</h4>
                <p>Gender: {data.gender}</p>
                <p>Birth Year: {data.birth_year}</p>
                <p>Hair Color: {data.hair_color} </p>
                <p>Skin Color: {data.skin_color} </p>
                <p>Eye Color: {data.eye_color}</p>
            
            </>
            
                
        
            : ""
            }
            
            { type === "planets" ?
            <>
        
                <h4>{data.name}</h4>
                <p>Climate: {data.climate}</p>
                <p>Diameter: {data.diameter}</p>
                <p>Terrain: {data.terrain}</p>
                <p>Population: {data.population}</p>
            </>
            
            : ""
            
            }
            { type === "starships" ?
            <>
                <h4>{data.name}</h4>
                <p>Model: {data.model}</p>
                <p>Manufacturer: {data.manufacturer}</p>
                <p>Length: {data.length}</p>
                <p>Crew: {data.crew}</p>
                <p>Passengers: {data.passengers}</p>
                
            </>
            : ""
            } 

        </div>
        

    </>
    );
}

export default SingleCharacter