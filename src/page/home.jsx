import React from 'react'

import Covid from '../containers/covid/index.jsx';
import Cards from '../containers/cards/index.jsx';
import Footer from '../components/footer/index.jsx';

function Home() {
  return (
    <div>
      <Covid />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home