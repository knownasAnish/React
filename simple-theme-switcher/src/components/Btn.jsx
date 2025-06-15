import React from 'react'
import useTheme from '../context/Theme'

function Btn(){
    const {themeMode, lightTheme, darkTheme} = useTheme();
    const switchTheme = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }
    return(
        <label className='inline-flex relative items-center '>
            <input type="checkbox" className='peer sr-only' onChange={switchTheme} checked={themeMode==='dark'}/>
            <span className='absolute left-32 '>Toggle for light/dark Mode</span>
            <div className='w-24 h-12 bg-gray-300 peer-checked:bg-blue-600 rounded-full '></div>
            <div className='w-11 h-10 absolute left-1 top-1 bg-white rounded-full peer-checked:translate-x-11'></div>
        </label>
    )
}
export default Btn