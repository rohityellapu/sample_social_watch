import React, { useState } from 'react'
import Weather from './Weather';
import { Link } from 'react-router-dom';

function Search() {
    let [item, setItem] = useState('');
    return (
        <div className='h-screen bg-amber-200'>
            <div className="input mx-4">
                <p className='text-green-700 p-2 text-xl text-center'>Get live weather...</p>
                <input type="text" value={ item } onChange={ (e) => setItem(e.target.value) } placeholder='Type: City name, State, Country' className='p-4 border-none rounded-lg focus:outline-green-100 w-full my-4' />

            </div>


            { item.length > 1 && <Weather location={ item } /> }
            <Link to='/' className='bg-cyan-400 rounded-xl text-xl text-center p-2 m-4 block hover:saturate-200 active:scale-95'>Go back Home<img className='h-6 w-6 mx-2 inline' src="https://img.icons8.com/ios-glyphs/256/home-page.png" alt="" /></Link>
        </div>
    )
}

export default Search