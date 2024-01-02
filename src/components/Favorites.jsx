import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading';
import axios from 'axios';
import FavWeather from './FavWeather';
const apiURL = "https://api.weatherapi.com/v1/current.json?key=ab45924f6c734aa9ab391639231602&q=";

function Favorites() {
    let weathData = JSON.parse(localStorage.getItem('weather'));
    let [favData, setWeathData] = useState(weathData?.favorites || []);
    let [item, setItem] = useState('');
    const [load, setloading] = useState(false)
    async function getWeather(loc) {
        setloading(true);
        let weath;
        await axios.get(apiURL + loc).then((res) => {
            console.log(res.data);
            weath = res.data;
        }).catch(console.log)
        setloading(false);
        return weath
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let newFav = { name: item, data: null };
        newFav.data = await getWeather(item)
        setWeathData(prev => (
            [...prev, newFav]
        ))
        weathData.favorites.push(newFav);
        localStorage.setItem('weather', JSON.stringify(weathData))
        setItem('');
    }
    return (
        <>
            <div className="p-2">
                <Link to='/search' className='bg-cyan-400 rounded-xl text-xl text-center p-2 m-4 block hover:saturate-200 active:scale-95'>Get weather by Search<img className='h-6 w-6 mx-2 inline' src="https://img.icons8.com/ios-glyphs/256/search.png" alt="" /></Link>
                <form onSubmit={ handleSubmit } className='flex justify-around items-center p-2'>
                    <input type="text" value={ item } onChange={ (e) => setItem(e.target.value) } placeholder='Add favorites' className='p-3 border-none rounded-lg focus:outline-green-100 ' />
                    <input type="submit" value="Add" className='p-2 px-4 hover:saturate-200 active:scale-95 rounded-md bg-blue-500 m-2' />

                </form>
                <div className="favorites flex flex-wrap">

                    { favData?.map((fav, i) => (
                        <Link to={ `/${fav.name}` }>  <FavWeather key={ fav.name + i } fav={ fav } i={ i } /></Link>


                    )) }
                    { load && <Loading /> }
                </div>

            </div>
        </>
    )
}

export default Favorites