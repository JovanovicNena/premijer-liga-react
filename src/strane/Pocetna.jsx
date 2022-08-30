import ListaStrelaca from "../komponente/ListaStrelaca";
import { useState } from 'react';
import NoviStrelacForma from "../komponente/NoviStrelacForma";

function Pocetna() {


    const [strelci, setStrelci] = useState([
        { id: 1, ime: 'Aleksandar', prezime: 'Mitrovic', godine: 27, broj_na_dresu: 9, klub: 'Fulham', broj_golova: 4 },
        { id: 2, ime: 'Erling', prezime: 'Haaland', godine: 22, broj_na_dresu: 9, klub: 'Manchester City', broj_golova: 6 },
    ]);


    function sacuvajStrelca(strelac) {
        alert('Novi strelac dodat u spisak!')
        setStrelci(strelci => [...strelci, strelac]);
    }


    return (
        <div className="d-pocetna">

            <h1>Premier League '22 - Top Scorers</h1>

            <div id="frm">
                <NoviStrelacForma funkcija={sacuvajStrelca} />
            </div>

            <table className="tbl table" id="tabela">
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Godine</th>
                        <th>Broj na dresu</th>
                        <th>Klub</th>
                        <th>Broj golova</th>
                    </tr>
                </thead>
                <ListaStrelaca listaStrelaca={strelci} />
            </table>
        </div>
    )
}

export default Pocetna;