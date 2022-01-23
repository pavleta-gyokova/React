const initState = {openClose : "closed", content : ''}

function siteModule (state = initState, action){
    if(action.type === 'OPEN_MODAL'){
        return action.payload
    }
    return state;
}
export default siteModule;