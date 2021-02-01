import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {connect} from "react-redux";

class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.recipe = '';
    };

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Write your awesome recipe
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            style={{resize: "both", width: "100%"}}
                            rowsMin={10} placeholder="Minimum 200 words"
                            value={this.recipe}
                            onChange={this.handleRecipeChange.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={12}/>
                </Grid>
            </React.Fragment>
        );
    }

    handleRecipeChange(event) {
        this.recipe = event.target.value;
        this.props.updateDishDetails(
            {
                dishName: this.props.dish.dishName,
                url: this.props.dish.url,
                ingredients: this.props.dish.ingredients,
                recipe: this.recipe,
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

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

