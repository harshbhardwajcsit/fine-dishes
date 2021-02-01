import React from 'react';
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {Fab, FormControl} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import * as validator from '../../validator/appValidator'

class Ingredients extends React.Component {

    constructor(props) {
        super(props);
        this.ingredient = {name: '', amount: '', unit: ''};
        this.ingredients = []
        this.state = {
            directors_array: ["director-0"]
        };
    };

    render() {
        return (
            this.state.directors_array.map((input, index) => (
                <Grid xs={12} container spacing={1} item>
                    <Grid xs={4} item>
                        <FormControl fullWidth margin="dense">
                            <TextField
                                variant="outlined"
                                required
                                onChange={this.handleIngredientAddition.bind(this)}
                                id="name"
                                label="Ingredient"
                                name="name"
                                size="small"
                                className="name"
                            />
                        </FormControl>
                    </Grid>
                    <Grid xs={4} item>
                        <FormControl fullWidth margin="dense">
                            <TextField
                                variant="outlined"
                                type="number"
                                required
                                onChange={this.handleIngredientAddition.bind(this)}
                                id="amount"
                                label="Amount"
                                name="amount"
                                size="small"
                                className="name"
                            />
                        </FormControl>
                    </Grid>
                    <Grid xs={4} item>
                        <FormControl fullWidth margin="dense">
                            <TextField
                                variant="outlined"
                                required
                                onChange={this.handleIngredientAddition.bind(this)}
                                id="unit"
                                label="Unit"
                                name="unit"
                                size="small"
                                className="unit"
                                InputProps={{
                                    endAdornment: index + 1 ===
                                        this.state.directors_array.length && (
                                            <InputAdornment position="end">
                                                <Tooltip title="Save Ingredient">
                                                    <Fab
                                                        color="primary"
                                                        size="small"
                                                        onClick={() => this.addIngredientsToList()}>
                                                        <AddIcon/>
                                                    </Fab>
                                                </Tooltip>
                                            </InputAdornment>
                                        )
                                }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            ))
        );
    }

    addIngredientsToList() {
        this.ingredients.push({name: this.ingredient.name, amount: this.ingredient.amount, unit: this.ingredient.unit});
        this.handleIngredientChange(this.ingredients);
        let newInput = `director-${this.state.directors_array.length}`;
        this.setState(prevState => ({
            directors_array: prevState.directors_array.concat([newInput])
        }));
    }

    handleIngredientChange(list) {
        if (list.size !== 0 && validator.validateIngredientList(list)) {
            this.props.updateDishDetails(
                {
                    dishName: this.props.dish.dishName,
                    url: this.props.dish.url,
                    ingredients: list
                }
            )
        }
    }

    handleIngredientAddition(event) {
        this.ingredient[event.target.name] = event.target.value;
    }
}


function mapStateToProps(state) {
    return {
        dish: state.dish
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateDishDetails: (dish) => {
            dispatch({type: 'SAVE_DISH_DETAILS', payload: dish})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
