import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: []
        }
    }

    render() { 
        return ( 
            <div className="app">
                <h1>Meal Finder</h1>
                <SearchBar
                    getMealsHandler={this.getMealsHandler} />
                <MealList
                    meals={this.state.meals} />
            </div>
         );
    }

    
    getMealsHandler = (meals) => {
        if (meals) {
            this.setState({ meals });
        }
    }
}
 
export default App;