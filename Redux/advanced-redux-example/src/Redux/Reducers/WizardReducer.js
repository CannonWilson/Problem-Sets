export const WizardReducer = (state = [], action) => {
    if (action.type === "NOWIZARD") {
        state.push({
            name: action.payload,
            wizard: false
        })
        return state
    }
    if (action.type === "YESWIZARD") {
        state.push({
            name: action.payload,
            wizard: true
        })
    }
    return state
}