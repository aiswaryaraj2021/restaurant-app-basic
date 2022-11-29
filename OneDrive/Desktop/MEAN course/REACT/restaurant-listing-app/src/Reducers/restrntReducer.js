import {R_SUCCESS,R_FAIL} from '../constants/restrntConstants'

export const restrntlistReducer = (state=({restrntList:[]}),action)=>{
    //2 outputs
    switch(action.type){
        //success
        case R_SUCCESS:
            return {restrntList:action.payload}

        case R_FAIL:
            return {restrntList:action.error}    
            
        default:
            return state      
    }  
} 