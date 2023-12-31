import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './favoritos.css'

function Favoritos() {

    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes:</h1>
            {filmes.length === 0 && <span>Voce não possui filmes salvos :(</span>}

            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`} >Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;