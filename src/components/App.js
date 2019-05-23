import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {

    const [hits, SetHits] = useState([]);

    useEffect(() => {
        GetHits();
    }, []);

    const GetHits = async () => {
        const res = await axios.get('http://hn.algolia.com/api/v1/search?query=javascript');
        
        SetHits(res.data.hits);
    }

    return(
        <div>
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
