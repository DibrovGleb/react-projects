import './App.sass';
import { useState } from 'react';

const imgArr = require.context('./pokemons', false, /\.(png|svg)$/),
      images = imgArr.keys().map(imgArr)

const CreateImage=()=> {
  let randomIndex = Math.floor(Math.random() * 11)
  return <img src={images[randomIndex]} alt="" />
}

export default function App() {

  return (
    <div className="App">

    </div>
    
  );
};