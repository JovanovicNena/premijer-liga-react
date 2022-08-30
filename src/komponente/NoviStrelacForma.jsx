import { useState } from 'react';

function NoviStrelacForma() {

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