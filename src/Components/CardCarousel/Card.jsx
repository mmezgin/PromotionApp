import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default ({item})=>{
    const navigete=useNavigate()
    return(
        <div className='card-background noselect'
        onClick={()=>navigete('/campaign',{state:item})}>
         <div className='card-con'>
            <div className='img-con'>
                 <img className='card-img noselect' src={item.ImageUrl}/>
                 <div className='brand-circle' style={{backgroundColor: item.PromotionCardColor}}>
                     <img className='brand-img' src={item.BrandIconUrl}/>
                 </div>
                 <div className='day-last-con'>
                     <p className='noselect'>{item.RemainingText}</p>
                 </div>
            </div>
            <div className='card-bottom'>
                <p className='card-title noselect'>{item.Title}</p>
                <p className='card-dahadaha noselect'style={{color:item.PromotionCardColor}} >Daha Daha</p>
            </div>
        </div>
        </div>
    )
}