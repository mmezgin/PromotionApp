import React from 'react'
import './index.scss'
import Header from '../../Components/Header'
import TagList from '../../Components/TagList'
import TabNav from '../../Components/TabNav'
import CardCarousel from '../../Components/CardCarousel'


export default () => {
  return (
    <div className='dashboard'>
      <Header />
      <TagList />
      <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1,border:'1px solid green',width:'100%'

    }}>
      <CardCarousel />

      </div>
      <TabNav />
    </div>
  )
}