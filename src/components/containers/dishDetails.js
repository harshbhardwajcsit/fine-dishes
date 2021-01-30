import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {bindActionCreators} from 'redux';
import * as action from '../../redux/userAction';
import {connect} from "react-redux";

class DishDetails extends React.Component {

    constructor(props) {

        super(props);
        let {dispatch} = this.props;

        this.state = {
            name: '',
            url: ''
        };

        this.userActions = bindActionCreators(action, dispatch);

    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Details for your new dish
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="dishName"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChangeName.bind(this)}
                            label="Name of the Dish"
                            fullWidth
                            autoComplete="Name of the Dish"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="url"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleChangeURL.bind(this)}
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

    handleChangeName(event) {
        this.state[event.target.name] = event.target.value;
        this.props.updateDishDetails({dishName: this.state.name, url: this.state.url})
    };

    handleChangeURL(event) {
        this.state[event.target.name] = event.target.value;
        this.props.updateDishDetails({dishName: this.state.name, url: this.state.url})
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(DishDetails);
