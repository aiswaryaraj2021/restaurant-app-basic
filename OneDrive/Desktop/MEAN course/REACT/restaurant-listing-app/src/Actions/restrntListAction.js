import axios from "axios";
import {R_SUCCESS,R_FAIL} from '../constants/restrntConstants'

export const restrntlistAction= ()=> async(dispatch) =>{
    try{
        const result = await axios.get('/db.json')
        console.log(result.data.restaurants);
        //success case:
        dispatch({
            type:R_SUCCESS,
            payload:result.data.restaurants
        })
    }
    catch(error){
        dispatch({
            type:R_FAIL,
            error:error
        })
    }
}