const initialState = {
    dishes: [],
    dish: {
        dishName: '',
        url: '',
        ingredients: [],
        recipe: ''
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_ALL_DISHES':
            return {
                ...state,
                dishes: action.payload
            };
        case 'SAVE_DISH_DETAILS':
            return {
                ...state,
                dish: action.payload
            }
        case 'ADD_DISH_TO_CATALOG':
            return {
                ...state,
                dishes: action.payload
            }
        default:
            return state;
    }
}
