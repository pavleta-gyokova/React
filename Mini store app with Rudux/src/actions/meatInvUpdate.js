
export function meatInvUpdate(operation, index) {
    return (
        {
            type: 'updateMeat',
            payload: {
                operation,
                index
            }
        }
    )
}