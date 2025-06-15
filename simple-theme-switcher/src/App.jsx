import { useEffect, useState } from 'react'
import Btn from './components/Btn.jsx'
import Card from './components/Card.jsx'
import { ThemeProvider} from './context/Theme.jsx'

function App() {
  const [ themeMode, setThemeMode ] = useState('light');
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light");
    document.querySelector('html').classList.remove("dark");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='w-full min-h-screen bg-white flex justify-center items-center'>
        <div className='w-[700px] h-[700px] bg-white border-2 rounded-xl  mx-auto my-auto flex flex-col justify-center items-center gap-5'>
          <Btn />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
