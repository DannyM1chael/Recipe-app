import React from 'react';
import style from '../recipes/recipe.module.css';

const Recipe = ( {title, calories, image, ingredients} ) => {

    const getCalories = Math.floor(calories);

    return(
        <div className = {style.recipe}>
            <h1>{ title }</h1>
            <ol>
                { ingredients.map((ingredient, index) =>(
                    <li key={ index }> { ingredient.text }</li>
                ))}
            </ol>
            <p className={style.calories}>{ getCalories } Cal</p>
            <img className = {style.image} src={ image } alt=""/>
        </div>
    )
}

export default Recipe;