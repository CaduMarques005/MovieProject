import axios from 'axios';

// url da base= https://api.themoviedb.org/3/
// url da api= https://api.themoviedb.org/3/movie/now_playing?api_key=8e48446d6c285f408cfda3585aaba46cS

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;