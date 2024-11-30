

const initializeState = ({
    currentLocation: '',
    toLocation: ''
})


const bookingReducer = (state=initializeState, action)=>{
    switch(action.type){
        case "currentLocation":
            const currentLocation = action.payload
            return {...state, currentLocation}
        case "toLocation":
            const toLocation = action.payload
            return {...state, toLocation}

        default:
            return state
    }
}

export default bookingReducer