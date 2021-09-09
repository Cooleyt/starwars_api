import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';

const Main = (props) => {
    const [searchType, setSearchType] = useState("people");
    const [searchID, setSearchID] = useState();
    const [list, setList] = useState([]);
    const history = useHistory();
    const {name} = useParams();

    const search = (e) => {
        e.preventDefault();
        history.push(`/${searchType}/${searchID}`)
    }
    
    return(
        <div>
            <form onSubmit={search}>
            <div>
            <p>Search for:</p>
            <select value={searchType} onChange={e => setSearchType(e.target.value)}>
                <option value=""></option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                
            </select>
            </div>
            <div>
            <p>Enter ID:</p>
            <input type="text" onChange={e => setSearchID(e.target.value)} type="number" value={searchID}/>
            </div>
            <input type="submit" value="Search the Galaxy" className="btn btn-alert" />

        </form>

        </div>
    )
}

export default Main