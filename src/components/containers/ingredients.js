import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux";

class Ingredients extends React.Component {

    constructor(props) {
        super(props);
        this.ingredients = [{name:'I1', amount:'1', unit:'Kg'}];
    };

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Add Ingredients
                </Typography>
                <Grid container spacing={3}>
                    <button onClick={this.handleIngredientChange.bind(this)}>Add</button>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="dishName"
                            name="dishName"
                            label="Name of the Dish"
                            fullWidth
                            autoComplete="Name of the Dish"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="picture"
                            name="picture"
                            label="Picture of your dish"
                            fullWidth
                            autoComplete="Picture of your dish"
                        />
                    </Grid>
                    <Grid item xs={12}/>
                </Grid>
            </React.Fragment>
        );
    }

    addOptionForNewIngredient(){

    }

    handleIngredientChange(event){
        this.props.updateDishDetails(
            {
                dishName: this.props.dish.dishName,
                url: this.props.dish.url,
                ingredients:this.ingredients
            }
        )
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


