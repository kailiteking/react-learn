import React, { Component } from 'react';
import './SearchBar.css'
class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.SearchVal = React.createRef()
    }
    
    render() { 
        return ( 
            <div className='search-container'>
                <form className="search-bar" onSubmit={this.searchMealHandler}>
                    <input type="text" id="search-input" ref={this.SearchVal} placeholder="search here" />
                    <button type="submit" className='btn'>Search</button>
                </form>
                <button className="btn random" onClick={this.getRandomMealHandler}>Random</button>
            </div>
            
         );
    }
    searchMealHandler = (e) => {
        e.preventDefault()

        const {current:{value}} = this.SearchVal

        if(!value.trim()) return alert("can't be empty")

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then(res => res.json())
            .then(data => this.props.getMealsHandler(data.meals));
    }

    getRandomMealHandler = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(res => res.json())
            .then(data => this.props.getMealsHandler(data.meals));
    }
}
 
export default SearchBar;