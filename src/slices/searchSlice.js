import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            let newItem = action.payload
            let items = [...state.items]

            items.unshift(newItem)
            state.items = [...items]

        },
        removeItem: (state, action) => {
            const itemDel = action.payload
            state.items = state.items.filter(item => item !== itemDel)
        }
    }
})

export const {
    addItem,
    removeItem,
} = searchSlice.actions

export default searchSlice.reducer
