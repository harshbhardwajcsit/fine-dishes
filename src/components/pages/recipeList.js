import React from "react";
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/userAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        let {dispatch} = this.props;

        this.userActions = bindActionCreators(actions, dispatch);
        this.userActions.fetchDishes();
    }

    render() {
        if (this.props.dishes) {
            let dishes = JSON.parse(this.props.dishes);
            return (
                <div style={{textAlign: 'center', padding: 250}}>
                    {this.generateListOfDishes(dishes)}
                    <br/>
                    <Link to="/new-recipe" className="btn btn-primary">New Recipe</Link>
                </div>

            );
        } else {
            return (
                <div style={{textAlign: 'center', padding: 250}}>
                    <p>No Dishes added</p>
                    <Link to="/new-recipe" className="btn btn-primary">New Recipe</Link>
                    <br/>
                </div>
            );
        }

    }

    generateListOfDishes(dishes) {
        const htmlRenderingList = [];
        dishes.map(dish => {
            htmlRenderingList.push(<div>
                <h3>{dish.dishName}</h3>
                <p>{dish.url}</p>
                <p>{dish.recipe}</p></div>)
        })
        return htmlRenderingList;
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(RecipeList)
