import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkmode } from '../../../redux/features/darkmodeSlice'
import './DarkMode.css'
import { motion } from 'framer-motion'

type DarkModeState = {
    darkmode:{
        darkmode: boolean
    }
}

function DarkMode() {
    const dispatch = useDispatch()
    const darkmode = useSelector((state: DarkModeState) => state.darkmode.darkmode)

  return (
    <div 
    className={`bg-portfolio-400 w-[3.5rem] h-[30px] rounded-full p-[5px] cursor-pointer flex flex-row ${darkmode? 'justify-end' : 'justify-start'} z-[10] relative right-[70%]`}
    onClick={()=> dispatch(toggleDarkmode())}
    >
        <motion.div 
        className='h-[20px] w-[20px] rounded-full bg-white'
        layout transition={{spring: 0.2}}
        ></motion.div>
        <img src={`/assets/${darkmode?'dark': 'light'}-mode.svg`} alt="light mode" className='' />
    </div>
  )
}

export default DarkMode