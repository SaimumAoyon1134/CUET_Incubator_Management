import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name : "users",
    initialState:{
        currentUser : null,
        isFetching : false,
        error : false,
    },
    reducers:{
       getUsersStart:(state)=>{
        state.isFetching=true;
       },
       getUsersSuccess:(state,action)=>{
        state.isFetching=false;
        state.currentUser=action.payload;
       
       },
       getUsersFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
       },
    }
});
export const {getUsersStart,getUsersSuccess,getUsersFailure} = usersSlice.actions;
export default usersSlice.reducer;
