import {configureStore} from "@reduxjs/toolkit"
import bookingReducer from "../features/bookingReducer"
const store = configureStore({
    reducer: bookingReducer
})

export default store