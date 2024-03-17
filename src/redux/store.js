import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { rootReducer } from "./contactsSlice";

export const store = configureStore({
    reducer: {
        contacts: rootReducer,
        filter: filterReducer,
    },

});

