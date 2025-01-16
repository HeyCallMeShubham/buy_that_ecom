
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface iInitialState {

    user: any | undefined,
    isLoggedIn: boolean | undefined

}



const initialState: iInitialState = {

    user: undefined,
    isLoggedIn: undefined

}






const userSlice = createSlice({

    name: "userSlice",
    initialState,
    reducers: {

        setCurrentUser: (state, action) => {

            const { data, isLoginSuccess }: { data: any, isLoginSuccess: boolean } = action.payload

            state.user = data
            state.isLoggedIn = isLoginSuccess


        }

    }

});



export const { setCurrentUser } = userSlice.actions;


export default userSlice.reducer;


