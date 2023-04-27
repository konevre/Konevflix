import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
    email: null | string;
    token: null | string;
    id: null | string;
}

const initialState: IUser = { email: null, token: null, id: null };

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

const { actions, reducer } = userSlice;

export default reducer;
export const { setUser, removeUser } = actions;
