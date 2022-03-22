import React from 'react'
import './index.scss'

export default ({item})=>{
    return(
        <div className='card-background'>
         <div className='card-con'>
            <div className='img-con'>
                 <img className='card-img' src={item.ImageUrl}/>
                 <div className='brand-circle' style={{backgroundColor: item.PromotionCardColor}}>
                     <img className='brand-img' src={item.BrandIconUrl}/>
                 </div>
                 <div className='day-last-con'>
                     <p className='noselect'>{item.RemainingText}</p>
                 </div>
            </div>
            <div className='card-bottom'>
                <p className='card-title'>{item.Title}</p>
                <p className='card-dahadaha'style={{color:item.PromotionCardColor}} >Daha Daha</p>
            </div>
        </div>
        </div>
    )
}