import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Layout/Header';
import { Main } from './Layout/Main';
import { Footer } from './Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header title={'Banana'} nav={[]} />
      <Main title={'Maça'} nav={[]}/>
      <Footer title={'cu'} nav={[]}/>
    </div>
  );
}

export default App;
