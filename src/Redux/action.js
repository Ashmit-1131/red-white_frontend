import {INC,DEC} from "./actionTypes";

export const increment=(payload)=>{
    return {
        type:INC,
        payload:1
    }
}

export const decrement=(payload)=>{
    return {
        type:DEC,
        payload:1
    }
}