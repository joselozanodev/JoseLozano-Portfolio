import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkmode: false
}

const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState,
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = !state.darkmode
        }
    }
})

export const { toggleDarkmode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;