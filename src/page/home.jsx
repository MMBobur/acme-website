import React from 'react'

import Covid from '../containers/covid/index.jsx'
import Cards from '../containers/cards/index.jsx' 
import Footer from '../containers/footer/index.jsx'
import Keep from '../containers/keeping/index.jsx'
function Home() {
  return (
    <div>
      <Covid />
      <Cards />
      <Keep />
      <Footer />
    </div>
  )
}

export default Home