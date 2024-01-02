import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './Loading';

const apiURL = "https://api.weatherapi.com/v1/current.json?key=ab45924f6c734aa9ab391639231602&q=";

function Weather({ location }) {
    const [weather, setWeather] = useState({})
    const [col, setColor] = useState('rgb(0,0,0)')
    const [load, setloading] = useState(false)
    async function getWeather(loc) {
        setloading(true);
        await axios.get(apiURL + loc).then((res) => {
            console.log(res.data);
            setWeather(res.data)
            let temp = res.data.current.temp_c
            let color = 'rgb(244,244,24)'

            if (temp > -10 && temp <= 0) {
                color = 'rgb(50,97,214)'
            } else if (temp > 1 && temp <= 15) {
                color = 'rgb(244,244,244)'
            } else if (temp > 16 && temp <= 25) {
                color = 'rgb(244,204,0)'
            } else if (temp > 26) {
                color = 'rgb(216,128,48)'
            };
            setColor(color);
        }).catch(console.log)
        setloading(false);
    }

    useEffect(() => {

        getWeather(location);


    }, [location])
    return (
        <>
            { load ? <Loading /> :
                <div className="currentWeather p-4 rounded-b-3xl shadow-xl text-opacity-90 text-gray-900 shadow-gray-500 text-center flex flex-col justify-center items-center" style={ { backgroundColor: col } }>

                    <h1 className='text-5xl mx-5 mb-2'>{ weather?.location?.name }</h1>
                    <h2 className='text-xl'>{ weather?.location?.region + ", " + weather?.location?.country }</h2>
                    <p className='font-semibold'>{ (new Date()).toDateString() }, { weather?.location?.localtime.substr(10) }</p>

                    { weather?.current?.is_day == 1 ? <img className='inline h-20 w-20' src={ require('../images/day.png') } /> : <img className='inline h-20 w-20' src={ require('../images/night.png') } /> }
                    <div className="temp m-4">

                        <p className='text-7xl font-bold inline-block'>{ weather?.current?.temp_c }<sup>o</sup></p><span className='text-7xl font-bold'>C</span>

                    </div>
                    <p className='font-bold'>Feels like { weather?.current?.feelslike_c }<sup>o</sup>C</p>
                    <img className='' src={ weather?.current?.condition?.icon } alt="" />
                    <p className='text-3xl'>{ weather?.current?.condition?.text } </p>
                    <p className='text-md font-semibold m-1'>Wind Speed { weather?.current?.wind_kph } km/h</p>
                    <p className='text-md font-semibold m-1'>Humidity { weather?.current?.humidity } %</p>
                </div>
            }
        </>
    )
}

export default Weather