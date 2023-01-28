import React from 'react'
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';


const InsideApp = () => {
  return (
    <div>
      <Header title={'Header'} nav={[]} />
      <Main title={'Main Page'} nav={[]}/>
      <Footer title={'Footer'} nav={[]}/>
    </div>
  )
}

export default InsideApp