
const seedData =
    [{ food: 'TV dinners', quantity: 10 },
    { food: 'Frozen Veggies', quantity: 23 },
    { food: 'Frozen Pizzas', quantity: 55 }];

export function frozenReducer(state = seedData, action) {
    if (action.type === "UpdateFrozen") {
        const newState = [...state];
        if (action.payload.operation === '+') {
            newState[action.payload.index].quantity++
        } else if (action.payload.operation === '-') {
            newState[action.payload.index].quantity--
        }

        return newState;
    } else if (action.type === 'ResetInventory') {
        let newState = [...state];
        newState.forEach((item, i) => {
            item.quantity = 0
        })
        return newState
    } else {
        return state
    }

}