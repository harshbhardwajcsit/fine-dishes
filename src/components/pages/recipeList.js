import React from "react";
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/userAction';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        let {dispatch} = this.props;
        this.userActions = bindActionCreators(actions, dispatch);
        this.userActions.fetchDishes();
        this.dishes = this.cloneDishes = [];
        this.state = props;
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        if (this.dishes.length === 0 && this.props.dishes) {
            this.dishes = JSON.parse(this.props.dishes);
            this.cloneDishes = JSON.parse(this.props.dishes);

        }
        if (this.dishes.length > 0) {
            return (
                <Grid xs={12} container spacing={1} item style={{textAlign: 'auto', padding: 25}}>
                    <Grid xs={6} item>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={this.getAllIngredients(this.cloneDishes)}
                            disableCloseOnSelect
                            onChange={(event, newValue) => {
                                this.selectIngredient(newValue);
                            }}
                            getOptionLabel={(option) => option.ingredientName}
                            renderOption={(option, {selected}) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{marginRight: 8}}
                                        checked={selected}
                                    />
                                    {option.ingredientName}
                                </React.Fragment>
                            )}
                            style={{width: 500}}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Ingredients"
                                           placeholder="Select Ingredient"/>
                            )}/>
                        <br/>
                    </Grid>
                    <Grid xs={6} item>
                        <Button variant="contained"
                                color="primary" onClick={() => this.nextPath('/new-recipe')}>New Recipe</Button>
                    </Grid>
                    {this.generateListOfDishes(this.dishes)}
                </Grid>

            );
        } else {
            return (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                        No dishes are available in Catalog
                    </Typography>
                    <Button variant="contained"
                            color="primary" onClick={() => this.nextPath('/new-recipe')}>New Recipe</Button>
                </React.Fragment>
            )

        }
    }

    selectIngredient(filteredIngredients) {
        const filteredDishes = [];

        filteredIngredients.map(i => {
            this.cloneDishes.map(dish => {
                dish.ingredients.map(j => {
                    if (j.ingredientName === i.ingredientName) {
                        if (!filteredDishes.includes(dish)) {
                            filteredDishes.push(dish);
                        }
                    }
                })
            })
        })

        this.dishes = [...filteredDishes];
        this.render();
        this.setState(this.props)
    }

    generateListOfDishes(dishes) {
        const htmlRenderingList = [];
        dishes.map(dish => {
            htmlRenderingList.push(
                <Card style={{padding: 20}}>
                    <CardHeader
                        title={dish.dishName}/>
                    <CardMedia
                        image={dish.url}/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.getDishIngredientLabel(dish)}
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

    getDishIngredientLabel(dish) {
        const ingredients = dish.ingredients;
        let label = ''
        ingredients.map(ingredient => {
            label = label.concat(ingredient.ingredientName, '(', ingredient.quantity, ingredient.unit, ')', " ");
        })
        return label
    }

    getAllIngredients(dishes) {
        const listOfIngredients = [];

        if (dishes && dishes.length > 0) {
            dishes.map(dish => {
                const ingredients = dish.ingredients;
                if (ingredients) {
                    ingredients.map(ingredient => {
                        if (!listOfIngredients.includes(ingredient)) {
                            listOfIngredients.push(ingredient);
                        }
                    })
                }
            })
        }

        return listOfIngredients;
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(RecipeList)
