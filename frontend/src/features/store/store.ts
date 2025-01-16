
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import { Persistor, persistReducer, persistStore } from "redux-persist";

import { loginApi } from "../rtkQuery/loginApi";

import userSlice from "../reducers/user/userSlice"
import { registerApi } from "../rtkQuery/RegisterApi";

const persistConfig = {

    key: "user",
    version: 1,
    storage,
    blacklist: [loginApi.reducerPath, registerApi.reducerPath]

}



const reducer: Reducer = combineReducers({

    user: userSlice,

    [loginApi.reducerPath]: loginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,

})



const persistedReducer = persistReducer(persistConfig, reducer);




export const store = configureStore({

    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {

        return getDefaultMiddleware({

            serializableCheck: false

        }).concat(

            loginApi.middleware,
            registerApi.middleware,


        )
    }


});



export const persistor: Persistor = persistStore(store)



export type RootState = ReturnType<typeof store.getState>



export type AppDispatch = typeof store.dispatch


