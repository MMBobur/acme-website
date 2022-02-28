import React from 'react'

import Cards from '../containers/cards/index.jsx';
import Footer from '../components/footer/index.jsx';
import Covid from '../containers/covid/index.jsx'
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