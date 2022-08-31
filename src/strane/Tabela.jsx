import { useState } from 'react';

function Tabela() {

    const [data, setData] = useState([]);


    function prikazTabele() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1d0c4bc4afmshaeb2b5a63baf122p14654fjsn59b6ed1f2960',
                'X-RapidAPI-Host': 'premier-league-standings1.p.rapidapi.com'
            }
        };

        fetch('https://premier-league-standings1.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));

    }


    return (
        <div className="d-tabela">

            <button className='btn btn-primary' onClick={prikazTabele} id='premier-tbl'>Prikazi tabelu Premier lige</button>

            <div>
                <table className="table table-bordered table-light" id="tabela-pr" style={{ display: data.length > 0 ? 'block' : 'none' }}>
                    <thead className="table-primary">
                        <tr>
                            <th>Naziv kluba</th>
                            <th>Pobede</th>
                            <th>Nerešeno</th>
                            <th>Porazi</th>
                            <th>Broj bodova</th>
                            <th>Pozicija</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(klub => {
                            return (
                                <tr key={klub.team.abbreviation}>
                                    <td>{klub.team.name} <img src={klub.team.logo} style={{ height: '50px' }} /></td>
                                    <td>{klub.stats.wins}</td>
                                    <td>{klub.stats.ties}</td>
                                    <td>{klub.stats.losses}</td>
                                    <td>{klub.stats.points}</td>
                                    <td>{klub.stats.rank}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>


        </div >
    )
}

export default Tabela;

