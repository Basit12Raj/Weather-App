import React, { useRef } from 'react'

export default function 
(props) {
    const searchInput = useRef();
  return (
    <div className='flex shadow-xl'>
        <input type="text" placeholder="Enter a city name..." value={props.searchData} className="w-full py-3 pl-10 pr-4 rounded-lg border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" onChange={()=> props.eventHandler(searchInput.current.value)} ref={searchInput}></input>
        <button onClick={props.searchWeather} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Search
  </button>
    </div>
  )
}
