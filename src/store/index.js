import { configureStore } from "@reduxjs/toolkit";
import shiftSlice from "../features/shift/shiftSlice";
import  {shiftApi}  from "../services/shiftApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    shift: shiftSlice,
   [shiftApi.reducerPath]:shiftApi.reducer
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare().concat(shiftApi.middleware),
});
setupListeners(store.dispatch)

export default store 