import React from "react";
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/userAction';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";
import * as AppUtility from '../../utility/appUtility'

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
                            options={AppUtility.getAllIngredients(this.cloneDishes)}
                            disableCloseOnSelect
                            onChange={(event, newValue) => {
                                this.selectIngredient(newValue);
                            }}
                            getOptionLabel={(option) => option.name}
                            renderOption={(option, {selected}) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{marginRight: 8}}
                                        checked={selected}
                                    />
                                    {option.name}
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
                                style={{float: "right"}}
                                color="primary" onClick={() => this.nextPath('/new-recipe')}>New Recipe</Button>
                    </Grid>
                    {AppUtility.generateListOfDishes(this.dishes)}
                </Grid>

            );
        } else {
            return (
                <React.Fragment>
                    <div style={{textAlign: 'center', padding: 250}}>
                        <Typography variant="h5" gutterBottom>
                            No dishes are available in Catalog
                        </Typography>
                        <Button variant="contained"
                                color="primary" onClick={() => this.nextPath('/new-recipe')}>New Recipe</Button>
                    </div>
                </React.Fragment>
            )

        }
    }

    selectIngredient(filteredIngredients) {
        const filteredDishes = [];

        filteredIngredients.map(i => {
            this.cloneDishes.map(dish => {
                dish.ingredients.map(j => {
                    if (j.name === i.name) {
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
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(RecipeList)
