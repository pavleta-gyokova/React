function registerAction (regObj){
    return{
        type: "REGISTER_ACTION",
        payload: regObj
    }
}

export default registerAction;