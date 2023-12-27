import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//api call using thunk

export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{

    const result= axios.get('/restaurant.json').then(response=>response.data.restaurants)
       console.log(result);
       return result                  
})


const restaurantSlice = createSlice({
    name:"restaurantList",
    initialState:{

    loading:false,                /* there are three promise state pending,resolve,reject so we need to define the intitaial value beacuse using slice we doing a api call while doing a api call using slice wee want to use like this */
    allRestaurant:[],
    searchRestaurant:[],
    error:"",

    },

    extraReducers : (builder)=>{         /* builder hold the value or response from thunk */
      builder.addCase(fetchRestaurant.pending,(state)=>{
        state.loading = true
      })   /* addcasse can only change the value of state */
      builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
        state.loading=false;
        state.allRestaurant = action.payload;
        state.searchRestaurant = action.payload
        state.error="";
      });
      builder.addCase(fetchRestaurant.rejected,(state,action)=>{
        state.loading = false;
        state.allRestaurant="";
        state.error = action.error.message;
      });
    },


    /* Thunk accept an action type string and a function that returns a promise and generate a thunk that dispatches pending / fullfill/ rejected action type based on that promise  */

    /* thunk is not part of slice its an seprate method in toolkit *******/




    reducers : {
      search:(state,action)=>{
        state.allRestaurant=state.searchRestaurant.filter(item =>item.neighborhood.toLowerCase().includes(action.payload))
      }
    }
})
export const { search} = restaurantSlice.actions
export default restaurantSlice.reducer