interface Action {
    type: string
    payload: Payload
}

interface Payload {
    isLoading: boolean,
}

export const Types = {
    ON: 'LOADING_ON',
    OFF: 'LOADING_OFF',
};

// Reducer

const initialState = {
    isLoading: false,
};

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case Types.ON:
            return { ...action.payload};
        case Types.OFF:
            return { ...initialState };
        default:
            return state;
    }
}

// Action Creators

export function turnOn(username: any, password: any) {
    return {
        type: Types.ON,
        payload: {
            username,
            password
        },
    }
}

export function turnOff() {
    return {
        type: Types.OFF,
    }
}