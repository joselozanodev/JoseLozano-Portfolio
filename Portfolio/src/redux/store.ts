import { configureStore } from "@reduxjs/toolkit/react";
import darkmodeSlice from "./features/darkmodeSlice";

const store = configureStore({
    reducer: {
        darkmode: darkmodeSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;