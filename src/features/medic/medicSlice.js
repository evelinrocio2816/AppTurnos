import {createSlice} from '@reduxjs/toolkit'
import dataCategorys from '../../data/dataCategorys'
import dataMedicos from '../../data/dataMedicos'

const initialState ={
    categories : dataCategorys,
    medics: dataMedicos,
    medicsFilteredByCategory: [],
    categorySelected: null,
    medicIdSelected:null,
}
export const medicSlice = createSlice({
    name: 'medic',
    initialState,
    reducers:{
        setCategorySelected: (state,action)=>{
            state.categorySelected =action.payload
        },
        setMedicIdSelected : (state,action) =>{
            state.medicIdSelected= action.payload
        }

    }
})
export const {setCategorySelected,setMedicIdSelected}=medicSlice.actions
export default medicSlice.reducer