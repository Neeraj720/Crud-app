import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../Helpers/Localstorage";
import SliceData from "./Slice";

const preloadedState = loadFromLocalStorage('crudData')
const store =configureStore({
  reducer:{
    crudData:SliceData 
  },
  preloadedState: {
    crudData: preloadedState ? { value: preloadedState } : { value: [] },
  },
})

store.subscribe(() => {
  saveToLocalStorage('crudData', store.getState().crudData.value);
});

export default store