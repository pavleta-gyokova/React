
export function frozenInvUpdate(operation, index) {
    return (
        {
            type: 'UpdateFrozen',
            payload: {
                operation,
                index
            }
        }
    )
}