import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from  './pizzaSlice'
// import userdata from './userdatastore'

export const store = configureStore ({
    reducer: {
        pizza: pizzaReducer,
        // userdata: userdatareducer,
    },
});