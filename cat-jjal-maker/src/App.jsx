import { useState } from 'react'

import './App.css'
import Title from './components/title';
import Form from './components/form';
import MainCard from './components/main-card';
import Favorites from './components/favorites';

function App() {
  const CAT1 =
    "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
  const CAT2 =
    "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
  const CAT3 =
    "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";
  const cats = [CAT1, CAT2, CAT3];

  const [counter, setCounter] = useState(1);
  const [mainCat, setMainCat] = useState(CAT1);
  const handleSubmit = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
    setMainCat(CAT2);
  }

  const [favorites, setFavorites] = useState(cats);
  const handleFavorite = () => {
    setFavorites([...favorites, mainCat]);
    console.log(cats)
  }

  return (
    <div className="App">
      <Title>{counter}야옹🐱</Title>
      <Form handleFormSubmit={handleSubmit} />
      <MainCard img={mainCat} handleFavorite={handleFavorite} />
      <Favorites />
    </div>
  )
}

export default App
