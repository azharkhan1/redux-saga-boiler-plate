import { TODO } from "../actions/actionTypes";
const initialState = {
    isFetching:false,
    isLoading:false,
    data:[]
}

export default function todo(state = initialState , action){

    switch(action.type){
        case TODO.REQUEST:{
            let newState = {...state};
            newState = {...newState,isLoading:true};
            return newState;
        }
        case TODO.SUCCESS:{
            let newState = {...state};
            newState.isLoading = false;
            newState.data = action.data
            return newState;
        }
        case TODO.FAILURE:{
            let newState = {...state};
            newState = {...newState,isLoading:false};
            return newState;
        }
        default:{
            return state;
        }
    }
}