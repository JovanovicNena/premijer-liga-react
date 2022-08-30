import { useEffect, useState } from 'react';

function Tabela() {

    const [data, setData] = useState();


    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1d0c4bc4afmshaeb2b5a63baf122p14654fjsn59b6ed1f2960',
                'X-RapidAPI-Host': 'premier-league-standings1.p.rapidapi.com'
            }
        };

        fetch('https://premier-league-standings1.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


    }, []);


    return (
        <div className="d-tabela">

        </div>
    )
}

export default Tabela;