import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
    <Title Title="Box Office" subtitle="Looking for a Movie or Actor !"/>
    <Navs />
     {children}
   
  </div>
  )
}

export default MainPageLayout