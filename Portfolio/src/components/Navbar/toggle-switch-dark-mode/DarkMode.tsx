import './DarkMode.css'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function DarkMode() {
    const [theme, setTheme] = useState<string>('light')
    
    useEffect(()=>{
      if(theme === 'dark'){
        document.querySelector('html')?.classList.add('dark')
      }else{
        document.querySelector('html')?.classList.remove('dark')
        document.querySelector('body')?.classList.add('bg-portfolio-50')
      }
    },[theme])

    const handleThemeSwitch = ()=>{
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

  return (
    <div 
    className={`bg-slate-500 w-[3.5rem] h-[30px] rounded-full p-[3px] cursor-pointer flex gap-[4%] flex-row dark:flex-row-reverse ${theme === 'dark'? 'justify-end' : 'justify-start'} z-[100] relative right-[70%]`}
    onClick={handleThemeSwitch}
    >
        <motion.div 
        className='h-[23px] w-[23px] rounded-full bg-white'
        layout transition={{spring: 0.2}}
        ></motion.div>
        <img src={`/assets/${theme === 'dark' ?'dark': 'light'}-mode.${theme === 'dark' ? 'png' : 'svg'}`} alt="light mode" />
    </div>
  )
}

export default DarkMode