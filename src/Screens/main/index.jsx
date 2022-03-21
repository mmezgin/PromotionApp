import React from 'react'
import './index.scss'
import Header from '../../Components/Header'
import TagList from '../../Components/TagList'
import TabNav from '../../Components/TabNav'
import Card from '../../Components/Card'

export default () => {
  return (
    <div className='dashboard'>
      <Header />
      <TagList />
      <Card />
      <TabNav />
    </div>
  )
}