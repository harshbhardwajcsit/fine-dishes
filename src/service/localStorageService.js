const LOCAL_STORAGE_SERVICE = {

    createDish: (data) => {
        if (localStorage.getItem('dishes')) {
            const existingDishes = JSON.parse(localStorage.getItem('dishes'));
            existingDishes.push(data)
            localStorage.setItem('dishes', JSON.stringify(existingDishes));
        } else {
            const newDishes = [];
            newDishes.push(data);
            localStorage.setItem('dishes', JSON.stringify(newDishes));
        }
    },

    fetchAllDishes: () => {
        return localStorage.getItem('dishes');
    },
};

export default LOCAL_STORAGE_SERVICE;
