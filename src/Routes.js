import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Filme from './pages/Filme';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

function routesApp(){
    return(
<BrowserRouter>
<Header/>   
<Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/Filme/:id' element={<Filme/>}/>
    <Route path='/Favoritos' element ={ <Favoritos />}/>
    
    <Route path='*' element={ <Erro/> }/>
</Routes>
</BrowserRouter>
    )
}

export default routesApp;
