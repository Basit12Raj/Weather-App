import React from 'react'

export default function Result({weatherData, historyData, searchHistory}) {

    const historyItems= historyData.map(
        (item,index)=>{
            return<li onClick={()=>searchHistory(item)} className=' text-xl cursor-pointer text-green-600 ' key={index}>{item}</li>
        }
    )

  return (
    <div className='grid grid-cols-4 shadow-xl mt-5 p-2'>
        <div className="col-span-1 border-r-4">
            <span className=' text-center block font-bold'>history</span>
            <ul>
                {historyItems}
            </ul>
        </div>
        <div className="col-span-3">

        {
            weatherData.length !== 0
            ?
            <>
        <h2 className=' text-3xl font-bold text-center text-blue-600 '>{weatherData.name}</h2>
        <div className='flex justify-around text-red-600 font-semibold mt-4'>
             <div>Max Temp : {weatherData.main.temp_max}℃</div>
             <div>Min Temp : {weatherData.main.temp_min}℃</div>
        </div>
        <div className='flex justify-around mb-4 p-7 items-center'>
             <div>
             <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
             </div>
             <div className=' text-3xl text-green-500'>{weatherData.weather[0].main}</div>
        </div>
        </>
        :
        <>
        <h2 className=' text-center font-bold text-3xl p-3'>Please Enter Your City...</h2>
        </>


        }
        </div>
    </div>
  )
}
