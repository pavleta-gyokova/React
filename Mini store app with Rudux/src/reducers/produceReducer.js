
const produceData =
    [{ food: 'lettuce', quantity: 15 },
    { food: 'turnips', quantity: 23 },
    { food: 'apples', quantity: 69 },
    { food: 'cilantro', quantity: 200 }];
    
export function produceReducer(state = produceData, action) {
    if(action.type === 'UpdateProduce'){
        const newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.index].quantity++;
        } else if(action.payload.operation === '-'){
            newState[action.payload.index].quantity--;
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