import React from 'react'

function FavWeather({ fav }) {

    let temp = fav?.data?.current?.temp_c
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

    return (
        <div className="currentfavdata m-2 rounded-xl p-2 w-24 shadow-xl text-opacity-90 text-gray-900 shadow-gray-500 text-center flex flex-col justify-center items-center" style={ { backgroundColor: color } }>

            <h1 className='text-lg font-semibold'>{ fav.data?.location?.name }</h1>

            <div className="temp ">

                <p className='text-xl font-bold inline-block'>{ fav.data?.current?.temp_c }<sup>o</sup></p><span className=' font-bold'>C</span>

            </div>

            <img className='h-6 w-6' src={ fav.data?.current?.condition?.icon } alt="" />
            <p className=''>{ fav.data?.current?.condition?.text } </p>

        </div>
    )
}

export default FavWeather