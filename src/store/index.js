import { configureStore } from "@reduxjs/toolkit";
import { medicApi } from "../services/medicApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../services/authApi";
import authSlice from "../features/auth/authSlice";
import medicSlice from "../features/medic/medicSlice";
import shiftSlice from "../features/shift/shiftSlice";


const store = configureStore({
  reducer: {
    medic:medicSlice,
    shift: shiftSlice,
    auth: authSlice,
   [medicApi.reducerPath]:medicApi.reducer,
   [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare().concat(medicApi.middleware,authApi.middleware),
});
setupListeners(store.dispatch)

export default store 