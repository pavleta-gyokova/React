
const meatData =
    [{ food: 'chicken', quantity: 30 },
    { food: 'pork', quantity: 32 },
    { food: 'beef', quantity: 100 },
    { food: 'lamb', quantity: 150 }];

export function meatReducer(state = meatData, action) {
    if (action.type === 'updateMeat') {
        const newState = [...state];
        if (action.payload.operation === '+') {
            newState[action.payload.index].quantity++
        } else if (action.payload.operation === '-') {
            newState[action.payload.index].quantity--
        }
        return newState
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