import React,{useState} from 'react'
import './index.scss'
import Portal from '../../SVG/Portal'
import Kesfet from '../../SVG/Kesfet'
import Star from '../../SVG/Star'

export default ()=>{
    const [tabState,setTabState]=useState([false,false])
    const unselectedColor='#898989'
    const defaultColor=''

    return(
        <div className='tab-container'>
            <div className='tab-svg'
            onClick={()=>setTabState([true,false])}>
            <Kesfet fill={tabState[0] ? defaultColor :unselectedColor} />
            <p className='tab-text noselect' style={{color:tabState[0] ? defaultColor :unselectedColor}}>KEŞFET</p>
            </div> 
            <div className='tab-svg' style={{marginBottom:'35px'}}
             onClick={()=>setTabState([false,false])}>
            <Portal />
            </div> 
            <div className='tab-svg'
             onClick={()=>setTabState([false,true])}>
            <Star fill={tabState[1] ? defaultColor :unselectedColor}/>
            <p className='tab-text noselect' style={{color:tabState[1] ? defaultColor :unselectedColor}}>DAHA CÜZDAN</p>
            </div>
        </div>
    )
}