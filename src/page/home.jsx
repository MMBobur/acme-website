import React from 'react'

import Covid from '../containers/covid/index.jsx'
import Cards from '../containers/cards/index.jsx' 

function Home() {
  return (
    <div>
      <Covid />
      <Cards />
    </div>
  )
}

export default Home