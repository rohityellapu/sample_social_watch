import React from 'react'
import { useLocation } from 'react-router'
import Weather from './Weather';
import { Link } from 'react-router-dom';

function ShowWeather() {
    const path = useLocation()?.pathname.substr(1);

    return (
        <div className={ `min-h-screen bg-amber-100` }>
            <Weather location={ path } />
            <Link to='/search' className='bg-cyan-400 rounded-xl text-xl text-center p-2 m-4 block hover:saturate-200 active:scale-95'>Get weather by Search<img className='h-6 w-6 mx-2 inline' src="https://img.icons8.com/ios-glyphs/256/search.png" alt="" /></Link>
            <Link to='/' className='bg-cyan-400 rounded-xl text-xl text-center p-2 m-4 block hover:saturate-200 active:scale-95'>Go back Home<img className='h-6 w-6 mx-2 inline' src="https://img.icons8.com/ios-glyphs/256/home-page.png" alt="" /></Link>
        </div>
    )
}

export default ShowWeather