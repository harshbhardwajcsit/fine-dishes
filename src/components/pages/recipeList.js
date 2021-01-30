import React from "react";
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/userAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        let {dispatch} = this.props;

        this.userActions = bindActionCreators(actions, dispatch);
        this.userActions.fetchDishes();
        this.expanded = false;
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

    handleExpandClick() {
        this.expanded = !this.expanded;
    }

    generateListOfDishes(dishes) {
        const htmlRenderingList = [];
        dishes.map(dish => {
            htmlRenderingList.push(
                <Card>
                    <CardHeader
                        title={dish.dishName}/>
                    <CardMedia
                        image={dish.url}/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/*{dish.ingredients}*/}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography paragraph>Step for cooking:</Typography>
                        <Typography paragraph>
                            {dish.recipe}
                        </Typography>
                    </CardContent>
                </Card>
            )
        })
        return htmlRenderingList;
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(RecipeList)
