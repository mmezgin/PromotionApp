import React,{useState,useEffect} from 'react'
import './index.scss'
import ScrollContainer from 'react-indiana-drag-scroll'
import axios from 'axios'
import Tag from './Tag'
export default ()=>{
const [data,setData]=useState(null)
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
            url: 'https://api.extrazone.com/tags/list',
        })
        .then((response) => {
            setData(response.data)
        })
    } catch (error) {
        console.log(error)
    }
},[])
// useEffect(()=>{
//     console.log(data)
// },[data])
    if(data){
        return(
            <div className='taglist-container'>
           {data.map((item)=>{
                return(
                        <Tag item={item} />
                )
            })}
            </div>
        )
    }
    return(
        <p>Yükleniyor...</p>
    )
}