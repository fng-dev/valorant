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
            return { ...action.payload };
        case Types.OFF:
            return { ...action.payload };
        default:
            return state;
    }
}

// Action Creators

export function turnOn() {
    return {
        type: Types.ON,
        payload: {
            isLoading: true
        },
    }
}

export function turnOff() {
    return {
        type: Types.OFF,
        payload: {
            isLoading: false
        }
    }
}