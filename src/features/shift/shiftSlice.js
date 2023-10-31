import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "userLoged",
  updateAdd: Date.now(),
  items: [],
  total: null,
};

export const shiftSlice = createSlice({
    name: 'shift',
    initialState,
    reducers: {
      addItem: (state, action) => {
        const medics = state.items
        const medicRepeated = medics.find(
          item => item.id === action.payload.id
        )
  
        if (!medicRepeated)
          return {
            ...state,
            items: [...state.items, action.payload],
            total: state.total + action.payload.price,
            updatedAt: new Date().toLocaleString(),
          }
  
        const itemsUpdated = medics.map(item => {
          if (item.id === action.payload.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + action.payload.quantity,
            })
          }
          return item
        })
        return {
          ...state,
          items: itemsUpdated,
          total: state.total + action.payload.price,
          updatedAt: new Date().toLocaleString(),
        }
      },
      removeItem: (state, action) => {},
    },
  })
  
  export const { addItem, removeItem } = shiftSlice.actions
  
  export default shiftSlice.reducer