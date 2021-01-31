import React from 'react';
import * as appUtility from './../utility/appUtility'

const mockDishes = [
    {
        dishName: "Greek Salad",
        url: "https://www.jessicagavin.com/wp-content/uploads/2018/02/greek-salad-2-1200.jpg",
        ingredients: [
            {name: "Tomato", amount: "1", unit: "Kg"},
            {name: "Paneer", amount: "2", unit: "Liter"},
            {name: "Beans", amount: "1", unit: "Bowl"}
        ],
        recipe: 'some Recipe'
    },
    {
        dishName: "Greek Salad Part 2",
        url: "https://www.jessicagavin.com/wp-content/uploads/2018/02/greek-salad-2-1200.jpg",
        ingredients: [
            {name: "Potato", amount: "1", unit: "Kg"},
            {name: "Cheese", amount: "2", unit: "Liter"},
            {name: "Butter", amount: "1", unit: "Bowl"}
        ],
        recipe: 'some Recipe'
    }
]

test('for dishes rendered on main page', () => {
    expect(appUtility.generateListOfDishes(mockDishes).length).toBe(2);
})

test('for ingredient filter dropdown', () => {
    const ingredients = [
        {name: "Tomato", amount: "1", unit: "Kg"},
        {name: "Paneer", amount: "2", unit: "Liter"},
        {name: "Beans", amount: "1", unit: "Bowl"},
        {name: "Potato", amount: "1", unit: "Kg"},
        {name: "Cheese", amount: "2", unit: "Liter"},
        {name: "Butter", amount: "1", unit: "Bowl"},
    ]

    expect(appUtility.getAllIngredients(mockDishes)).toStrictEqual(ingredients);
})

test('for ingredient label', () => {
    const label = "Tomato(1Kg) Paneer(2Liter) Beans(1Bowl) ";
    expect(appUtility.getDishIngredientLabel(mockDishes[0])).toStrictEqual(label);
})
