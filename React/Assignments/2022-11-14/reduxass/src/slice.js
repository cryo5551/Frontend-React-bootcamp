import { createSlice } from '@reduxjs/toolkit';


const themeToggler = createSlice({
    name: 'Themes',
    initialState:{
        theme: true,
    },

    reducers: {
        setTheme: (initialState, action) => {
            initialState.theme = !initialState.theme
        }
    }
});


export const { setTheme } = themeToggler.actions;
export default themeToggler.reducer;