import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import React from "react";
import * as commonStyle from '../styling/commonStyling'

export function generateListOfDishes(dishes) {
    const htmlRenderingList = [];
    dishes.map(dish => {
        htmlRenderingList.push(
            <Card style={commonStyle.getStyling().card.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={commonStyle.getStyling().card.avatar}>
                            I
                        </Avatar>
                    }
                    title={dish.dishName}/>
                <CardMedia style={commonStyle.getStyling().card.media}
                           image='https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg'/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ingredients : {this.getDishIngredientLabel(dish)}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography paragraph style={commonStyle.getStyling().card.sub}>Steps for cooking:</Typography>
                    <Typography paragraph>
                        {dish.recipe}
                    </Typography>
                </CardContent>
            </Card>
        )
    })
    return htmlRenderingList;
}

export function getDishIngredientLabel(dish) {
    const ingredients = dish.ingredients;
    let label = ''
    ingredients.map(ingredient => {
        label = label.concat(ingredient.ingredientName, '(', ingredient.quantity, ingredient.unit, ')', " ");
    })
    return label
}

export function getAllIngredients(dishes) {
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
