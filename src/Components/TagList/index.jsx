import React,{useState,useEffect} from 'react'
import './index.scss'
import axios from 'axios'
import Tag from './Tag'
import { useDispatch } from 'react-redux'
import TagId_Action from '../../Redux/Actions/TagId_Action'
export default ()=>{
const dispatch=useDispatch()
const [selected,setSelected]=useState(-1)
const [data,setData]=useState(null)
const setSelectedTagId=(id)=>{
    setSelected(id)
    dispatch(TagId_Action(id))
}
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
                <div onClick={()=>setSelectedTagId(-1)}>
                <Tag selectedId={selected} item={{Id:-1,Name:'Fırsat Bul',IconUrl:'https://lun-eu.icons8.com/a/4R8g7vRtLka-XApzdfwPQg/dHyfOJ6L1UCPCoihhyQGmg/Small_Brand_Logo_1.ico'}} />
                </div>
           {data.map((item)=>{
                return(
                    <div onClick={()=>setSelectedTagId(item.Id)}>
                        <Tag item={item} selectedId={selected}/>
                        </div>
                )
            })}
            </div>
        )
    }
    return(
        <p>Yükleniyor...</p>
    )
}