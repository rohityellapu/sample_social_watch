import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import ShowWeather from './ShowWeather';

function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path='/' element={ <Home /> } />
                    <Route path='/search' element={ <Search /> } />
                    <Route path='/:location' element={ <ShowWeather /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App