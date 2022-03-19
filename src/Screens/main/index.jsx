import React from 'react'
import './index.scss'
import Header from '../../Components/Header'
import TagList from '../../Components/TagList'
import TabNav from '../../Components/TabNav'

export default () => {
  return (
    <div className='dashboard'>
      <Header />
      <TagList />
      <TabNav />
    </div>
  )
}