import React from 'react'
import './index.scss'
import theData from './tmp.json'
import Shape from '../../SVG/Shape'
 
export default ()=>{
    const item=theData.slider[2]
    const tag=theData.tagList[0]
    return(
        <>
         <div className='card-container'>
            <div className='img-con'>
                 <img className='card-img' src={item.ImageUrl}/>
                 <div className='brand-circle' style={{backgroundColor: item.PromotionCardColor}} >
                     <img className='brand-img' src={item.BrandIconUrl}/>
                 </div>
                 <div className='day-last-con'>
                     <p> 
                        {item.RemainingText}
                     </p>
                 </div>
            </div>
            <div className='card-bottom'>
                <p className='card-title'>{item.Title}</p>
                <p className='card-dahadaha'style={{color:item.PromotionCardColor}} >Daha Daha</p>
            </div>
           
        </div>
        {/* <div className='card-shape-container'> 
            <Shape />
            </div> */}
        </>
    )
}