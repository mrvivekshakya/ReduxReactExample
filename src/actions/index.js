export const increment = () =>{
    return {
        type: "INCREMENT"
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT"
    };
};

export const reset = () => {
    return {
        type: "RESET"
    };
};

export const addUser = (data) => {
    return {
        type: "ADD_USER",
        payload: data
    };
};

export const removerUser = (index) => {
    return {
        type: "REMOVE_USER",
        payload: index
    }
}

export const userChanged = (data) => {
    return {
        type: "CHANGED",
        payload: data
    }
}

