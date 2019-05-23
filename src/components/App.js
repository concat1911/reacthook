import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {

    const [hits, SetHits] = useState([]);
    const [keyword, SetKeyword] = useState("javascript");

    useEffect(() => {
        GetHits();
    }, [keyword]);

    const GetHits = async () => {
        const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${keyword}`);
        
        SetHits(res.data.hits);
    }

    return(
        <div>
            <form className="pure-form">
                <fieldset>
                    <input type="query" placeholder="Search here" onChange={event => GetHits(event.target.value)}/>

                    <button type="submit" className="pure-button pure-button-primary">Search</button>
                </fieldset>
            </form>

            <ul>
                {
                hits.map(hit => (
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}
