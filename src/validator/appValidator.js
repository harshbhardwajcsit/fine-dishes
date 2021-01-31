export const fieldsMissing = (activeStep, props) => {
    switch (activeStep) {
        case 0:
            return !props.dish || props.dish.dishName === '' || props.dish.url === ''
        case 1:
            return !props.dish.ingredients || props.dish.ingredients.length === 0
        case 2:
            return !props.dish.recipe || props.dish.recipe === ''
        default:
            return false
    }
}

export const validateIngredientList = (list) => {
    let validateIngredients = true;
    list.map(i => {
        if (i.name === '' || i.amount === '' || i.unit === '') {
            validateIngredients = false;
        }
    })
    return validateIngredients;
}
