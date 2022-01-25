export const WizardReducer = (state = [], action) => {
    if (action.type === "NOWIZARD") {
        state.push({
            name: action.payload,
            isWizard: false
        })
        return state
    }
    if (action.type === "YESWIZARD") {
        state.push({
            name: action.payload,
            isWizard: true
        })
        return state
    }
    return state
}