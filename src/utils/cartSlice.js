import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutaing the state here
            // VANILLA REDUX WE CANT NO MUTATE THE STATE 
            // CREATE A NEW STATE VARIABLE MUTATE IT AND THEN RETURN IT 
            // redux toolkit we have to MUTATE THE STATE 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {  //,action
            state.items.pop();
            // to print the state 
        },
        clearCart: (state, action) => {
            // state.items.length = 0;
            // or 
            return { items: []};
        }
    }
})
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;