import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
     <Product></Product>
    </div>
  );
}

export default App;
