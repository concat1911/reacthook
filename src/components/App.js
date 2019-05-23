import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export default function App() {

    const [hits, SetHits] = useState([]);
    const [keyword, SetKeyword] = useState("javascript");
    const [isLoading, SetLoading] = useState(false);
    const [error, CatchError] = useState(null);
    const searchInput = useRef();

    useEffect(() => {
        GetHits();
    }, []);

    const GetHits = async () => {
        SetLoading(true);

        try {
            const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${keyword}`);    
            SetHits(res.data.hits);
        } catch (error) {
            CatchError(error);
        }

        SetLoading(false);
    }

    const HandleSearch = event => {
        event.preventDefault();
        GetHits();
    }

    const HandleClear = () => {
        SetKeyword("");
        searchInput.current.focus();
    }

    return(
        <div>
            <form className="pure-form" onSubmit={HandleSearch}>
                <fieldset>
                    <input type="query" placeholder="Search here" onChange={event => SetKeyword(event.target.value)} value={keyword} ref={searchInput}/>

                    <button type="submit" className="pure-button pure-button-primary">Search</button>
                    <button type="button" className="pure-button pure-button-primary" onClick={HandleClear}>Clear</button>
                </fieldset>
            </form>
            {isLoading 
                ? <img alt="loading gif" src="./melanthelab.gif" />
                : <ul>
                    {
                    hits.map(hit => (
                        <li key={hit.objectID}>
                            <a href={hit.url}>{hit.title}</a>
                        </li>
                    ))
                    }
                </ul>
            }
            {error && <h1>{error.message}</h1>}
        </div>
    );
}
