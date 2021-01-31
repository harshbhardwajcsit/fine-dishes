import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import {withRouter} from 'react-router';
import Header from './common/header';
import Recipes from './pages/recipeList';
import NewRecipe from './pages/newRecipe';

const RecipePage = withRouter(Recipes);
const NewRecipePage = withRouter(NewRecipe);

const mapStateToProps = state => ({
    ...state
})

export class App extends React.Component {

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
