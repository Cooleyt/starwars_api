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
        <div className="row">
            <form onSubmit={search}>
            <div className="form-group text-center">
            <p className="text-muted">Search for:</p>
            <select className="dropdown col-md-1 text-center" value={searchType} onChange={e => setSearchType(e.target.value)}>
                <option value=""></option>
                <option value="planets">Planets</option>
                <option value="people">People</option>
                <option value="starships">Starships</option>
                <option value ="vehicles">Vehicles</option>
                    <option value ="species">Species</option>
                    <option value ="films">Films</option>
            </select>
            </div>
            <div className="form-group">
            <p>Enter ID:</p>
            <input type="text"className="form-group col-md-2 text-center" onChange={e => setSearchID(e.target.value)} type="number" value={searchID}/>
            </div>
            <input type="submit" value="Search the Galaxy" className="btn btn-secondary" />

        </form>

        </div>
    )
}

export default Main