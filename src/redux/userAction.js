import LOCAL_STORAGE_SERVICE from "../service/localStorageService";

export const UserActions = {
    ADD_DISH_TO_CATALOG: "[Recipe] Create new dish",
    SHOW_ALL_DISHES: "[Recipe] Show all dishes",
    SAVE_DISH_DETAILS: "[Recipe] Show all dishes",
}

export function createNewDish(data, state) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_DISH_TO_CATALOG',
            payload: LOCAL_STORAGE_SERVICE.createDish(data)
        });
    };
}

export function fetchDishes() {
    return (dispatch) => {
        dispatch({
            type: 'SHOW_ALL_DISHES',
            payload: LOCAL_STORAGE_SERVICE.fetchAllDishes()
        });
    };
}

export function saveDishDetails(data, state) {
    return (dispatch) => {
        dispatch({
            type: UserActions.SAVE_DISH_DETAILS,
            payload: data
        });
    };
}
