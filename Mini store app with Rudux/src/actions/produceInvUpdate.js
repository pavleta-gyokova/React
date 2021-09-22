
export function produceInvUpdate (operation, index){
    return(
        {
            type: 'UpdateProduce',
            payload: {
                operation,
                index
            }
        }
    )
}