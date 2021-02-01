import * as appUtility from '../utility/appUtility'
import * as testConstants from '../test/testConstant'

test('for dishes rendered on main page', () => {
    expect(appUtility.generateListOfDishes(testConstants.mockDishes).length).toBe(2);
})

test('for ingredient filter dropdown', () => {

    expect(appUtility.getAllIngredients(testConstants.mockDishes)).toStrictEqual(testConstants.mockIngredients);
})

test('for ingredient label', () => {
    const label = "Tomato(1Kg) Paneer(2Liter) Beans(1Bowl) ";
    expect(appUtility.getDishIngredientLabel(testConstants.mockDishes[0])).toStrictEqual(label);
})

test('for dish filter on ingredient select from dropdown', () => {
    const ingredients = [
        {name: "Tomato", amount: "1", unit: "Kg"}
    ]

    const filteredDishes = [];
    filteredDishes.push(testConstants.mockDishes[0]);
    expect(appUtility.filterDishesOnIngredientSelect(ingredients, testConstants.mockDishes)).toStrictEqual(filteredDishes);
})
