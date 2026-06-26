import React from 'react'
import Header from './Header'
import Meals from './Meals'

function Home() {
  return (
        <div className="relative">
            <Header />
            <Meals />
        </div>
  )
}

export default Home