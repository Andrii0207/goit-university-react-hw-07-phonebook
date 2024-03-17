import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: { items: [], isLoading: false, error: null },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(deleteContact.pending, (state, { payload }) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload.id)
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(addContact.pending, (state, { payload }) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items.push(payload);
                state.error = null;
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})

export const rootReducer = contactsSlice.reducer;


