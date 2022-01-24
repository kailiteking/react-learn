import React, { Component } from 'react';
import './MealList.css'

class MealList extends Component {

    render() { 
        return ( 
            <ul className="meal-list">
                {
                    this.props.meals.map(meal => 
                        <li key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <p data-meal-id={meal.idMeal}>{meal.strMeal}</p>
                        </li>
                    )
                }
            </ul>
         );
    }
}
 
export default MealList;