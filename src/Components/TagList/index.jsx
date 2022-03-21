import React,{useState,useEffect} from 'react'
import './index.scss'
import ScrollContainer from 'react-indiana-drag-scroll'
import theData from '../Card/tmp.json'
export default ()=>{
    const item =theData.tagList[0]
    return(
     <div className='tag-container'>
         <div className='tag'>
        <img className='tag-img' src={item.IconUrl} />
        <p className='tag-name'>{item.Name} </p>
         </div>
     </div>
    )
}