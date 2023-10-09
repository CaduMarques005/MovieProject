import {useEffect, useState} from 'react';
import {useParams, useNavigate, json} from 'react-router-dom'
import './filme.css'

import api from '../../services/api';

function Filme(){

    const {id } = useParams();
    const navigate = useNavigate()
    const [Filme, setFilme] = useState({})
    const [Loading, setLoading] = useState(true)

useEffect(() =>{
    async function loadFilme(){
        await api.get(`/movie/${id}`, {
            params:{
                api_key:'8e48446d6c285f408cfda3585aaba46c',
                language:'en'
            }
        })
        .then((response)=>{
            setFilme(response.data)
            setLoading(false)
        })
        .catch(() =>{
            navigate('/', {replace: true})
            return;
        })
    }
    loadFilme()

    return() =>{
        console.log('componente')
    }
}, [navigate, id])

function salvarFilme(){
    const minhaLista = localStorage.getItem('@primeflix')

    let filmeSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmeSalvos.some((filmeSalvo) => filmeSalvo === Filme.id)

    if(hasFilme){
        alert('ja esta na lista')
        return;
    }
    filmeSalvos.push(Filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmeSalvos))
    alert('Filme salvo com sucesso!!!')
}

if(Loading){
    return(
        <div className='filme-info'>
            <h1>Carregando detalhes</h1>
            </div>
        
    )
}



    return(
       <div className='filme-info'>
        <h1>{Filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${Filme.backdrop_path}`} alt={Filme.title}/>

        <h3>Sinopse:</h3>
        <span> {Filme.overview}</span>
        <strong>Avaliação: {Filme.vote_average} / 10</strong>

        <div className='area-button'>
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target='blank' href={`https://youtube.com/results?search_query=${Filme.title} Trailer`}>
                    Trailer
                </a>
            </button>

        </div>
       </div>
    )
    }
    
    export default Filme;