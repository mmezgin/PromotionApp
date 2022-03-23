import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import Back from '../../SVG/Back'

export default (props) => {
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    const location=useLocation()
  useEffect(()=>{
    try {
        axios
        .request({
            headers: {
            "X-Country-Id":"TR",
            "X-Language-Id":"TR",
            "Content-Type":"application/json"
            },
            method: 'GET',
            url: 'https://api.extrazone.com/promotions?Id='+location.state.Id,
        })
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        } catch (error) {
            console.log(error)
        }
    },[])
    if(data){
  return (
    <div className='detail-con'>
       <div className='d-img-con'>
                 <img className='d-card-img noselect' src={data.ImageUrl}/>
                 <div className='d-brand-circle' style={{backgroundColor: data.BrandIconUrl}}>
                     <img className='d-brand-img' src={data.BrandIconUrl}/>
                 </div>
                 <div className='d-day-last-con'>
                     <p className='noselect'>{data.RemainingText}</p>
                 </div>
            </div>
            <p className='d-title'>{data.Title}</p>
    <div style={{padding:'10px',fontFamily:'os-reg'}} dangerouslySetInnerHTML={{__html: data.Description}} />
    <div className='d-button'>
      <p className='noselect d-button__text'>Hemen Katıl</p>
    </div>
    <div className='back-btn' onClick={()=>navigate(-1)}>
      <Back />
    </div>
    </div>
  )
}
return(
  <div  style={{display:'flex',flex:1,justifyContent:'center',aligndatas:'center'}}>
    Yükleniyor...
  </div>
)
}