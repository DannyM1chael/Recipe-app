import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/recipes';

function App() {

  const APP_ID = 'b4d46623';
  const APP_KEY = 'e68874cdf739098fa7ae03bc9727cfb5';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const curl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(curl);
    const data = await res.json();
    setRecipes(data.hits);
  };

  const updateSearch = event => {
    setSearch(event.target.value)
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit ={ getSearch } className='search-form'>
        <input 
          className='search-bar' 
          type='text' 
          value={ search } 
          onChange ={ updateSearch }
        />
        <button className ='search-button'>
          Search
        </button>
      </form>
      <div className='recipes'>
        { recipes.map((recipe, index) =>(
          <Recipe
            key = { index } 
            title ={ recipe.recipe.label } 
            calories = { recipe.recipe.calories }
            image = { recipe.recipe.image } 
            ingredients = { recipe.recipe.ingredients }/>
        ))}
      </div>
    </div>
  );
}

export default App;
