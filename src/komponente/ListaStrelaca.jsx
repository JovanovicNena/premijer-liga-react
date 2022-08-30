

function ListaStrelaca(props) {

    const listaStrelaca = props.listaStrelaca;

    return (
        <tbody>
            {listaStrelaca.map(strelac => {
                return (
                    <tr key={strelac.id}>
                        <td>{strelac.ime}</td>
                        <td>{strelac.prezime}</td>
                        <td>{strelac.godine}</td>
                        <td>{strelac.broj_na_dresu}</td>
                        <td>{strelac.klub}</td>
                        <td>{strelac.broj_golova}</td>
                    </tr>
                );
            })}
        </tbody>
    )
}

export default ListaStrelaca;