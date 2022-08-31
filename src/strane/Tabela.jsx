import { useEffect, useState } from 'react';

function Tabela() {

    const [data, setData] = useState();



    return (
        <div className="d-tabela">

            <button className='btn btn-primary' id='premier-tbl'>Prikazi tabelu Premier lige</button>

            <table className="tbl table" id="tabela" hidden>
                <thead>
                    <tr>
                        <th>Naziv kluba</th>
                        <th>Pobede</th>
                        <th>Neresno</th>
                        <th>Porazi</th>
                        <th>Broj bodova</th>
                        <th>Pozicija</th>
                    </tr>
                </thead>

            </table>



        </div>
    )
}

export default Tabela;

/*

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
            */