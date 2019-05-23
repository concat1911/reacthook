import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {

    useEffect(() => {
        axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
            .then(res => {
                console.log(res.data);
            })
    })

    return(
        <div>

        </div>
    );
}
