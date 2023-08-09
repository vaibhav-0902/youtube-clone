import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchResults: [],
    selectedCategory: "New",
    mobileMenu: false,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setMobileMenu: (state, action) => {
            state.mobileMenu = action.payload;
        },
    }
});

export const { setLoading, setSearchResults, setSelectedCategory, setMobileMenu } = appSlice.actions;
export default appSlice.reducer;