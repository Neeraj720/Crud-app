import { createSlice } from "@reduxjs/toolkit";

let slice =createSlice({
  name:"crud app",
  initialState:{
    value:[]
  },
  reducers:{
    AddItem: (state,action) =>{
      let data = action.payload
      let len = state.value.length
      let id = len == 0 ? 1 : state.value[len-1].id+1
      console.log("Length is :" + len)
      state.value = [...state.value,{id,...data}]
    },
    updateUser:(state,action) =>{
      const {id,name,email} = action.payload
      const update = state.value.find((user) => user.id == id)
      if(update){
        update.name = name
        update.email = email
      }

    },
    deleteItem: (state,action) =>{
      let deleteId = action.payload
      state.value = state.value.filter((user) => user.id !== deleteId)
    }
  }
})
export const {AddItem,updateUser,deleteItem} = slice.actions
export default slice.reducer;