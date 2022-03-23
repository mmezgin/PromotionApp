import React,{useEffect, useState} from 'react'
import './index.scss'

export default ({item,selectedId})=>{
    return(
        <div className='tag-container'>
        <div className='tag'  style={{borderColor:selectedId==item.Id ? '#F40000':'rgba(137, 137, 137, 0.5)'}}>
       <img className='tag-img' src={item.IconUrl} />
       <p className='tag-name noselect'>{item.Name} </p>
        </div>
    </div>
    )
}