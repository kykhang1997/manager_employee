import * as Types from '../constants/ActionTypes';

export const add_list  = (title,details) => {
    return {
        type : Types.ADD_LIST,
        title,
        details
    }
}

export const del_list = (id) => {
    return {
        type : Types.DELETE_LIST,
        id
    }
}

export const close  = () => {
    return {
        type : Types.CLOSE
    }
}

export const toggle  = () => {
    return {
        type : Types.TOGGLE
    }
}

