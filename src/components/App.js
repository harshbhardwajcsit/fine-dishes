import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import * as userAction from '../redux/userAction'
import {withRouter} from 'react-router';
import Header from './common/header';
import Recipes from './pages/recipeList';
import NewRecipe from './pages/newRecipe';

const RecipePage = withRouter(Recipes);
const NewRecipePage = withRouter(NewRecipe);

/*
 * mapStateToProps
*/
const mapStateToProps = state => ({
    ...state
})

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" render={() => <RecipePage/>}/>
                    <Route exact path="/new-recipe" render={() => <NewRecipePage/>}/>
                </div>
            </Router>
        );
    }
}

export default connect(mapStateToProps)(App);
