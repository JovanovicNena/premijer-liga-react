import { useState } from 'react';

function NoviStrelacForma() {

    const [id, setId] = useState('');
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [godine, setGodine] = useState('');
    const [broj_na_dresu, setBrojDres] = useState('');
    const [klub, setKlub] = useState('');
    const [broj_golova, setBrojGolova] = useState(0);

    function saveId(e) {
        setId(e.target.value)
    }

    function saveIme(e) {
        setIme(e.target.value)
    }

    function savePrezime(e) {
        setPrezime(e.target.value)
    }

    function saveGodine(e) {
        setGodine(e.target.value)
    }

    function saveBrojDres(e) {
        setBrojDres(e.target.value)
    }

    function saveKlub(e) {
        setKlub(e.target.value)
    }
    function saveBrojGolova(e) {
        setBrojGolova(e.target.value)
    }

    return (
        <div className="d-nsf">

            <div className="form-elm">
                <label>ID: </label>
                <input type='text' className="form-control mt-2 mb-2" value={id} onChange={saveId} />
            </div>
            <div className="form-elm">
                <label>Ime: </label>
                <input type='text' className="form-control mt-2 mb-2" value={ime} onChange={saveIme} />
            </div>
            <div className="form-elm">
                <label>Prezime: </label>
                <input type='text' className="form-control mt-2 mb-2" value={prezime} onChange={savePrezime} />
            </div>
            <div className="form-elm">
                <label>Godine: </label>
                <input type='text' className="form-control mt-2 mb-2" value={godine} onChange={saveGodine} />
            </div>
            <div className="form-elm">
                <label>Broj na dresu: </label>
                <input type='text' className="form-control mt-2 mb-2" value={broj_na_dresu} onChange={saveBrojDres} />
            </div>
            <div className="form-elm">
                <label>Klub: </label>
                <input type='text' className="form-control mt-2 mb-2" value={klub} onChange={saveKlub} />
            </div>
            <div className="form-elm">
                <label>Broj golova: </label>
                <input type='text' className="form-control mt-2 mb-2" value={broj_golova} onChange={saveBrojGolova} />
            </div>


        </div>
    )
}

export default NoviStrelacForma;