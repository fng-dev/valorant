interface Action {
    type: string
    payload: Payload
}

interface Payload {
    isLogged: boolean,
    token: string,
    user: object,
}

export const Types = {
    LOGIN: 'AUTH_LOGIN',
    LOGOUT: 'AUTH_LOGOUT',
};

// Reducer

const initialState = {
    isLogged: false,
    token: null,
    user: {},
};

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case Types.LOGIN:
            return { ...action.payload};
        case Types.LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}

// Action Creators

export function login(username: any, password: any) {

    const returnApi = {
        isLogged: true,
        token: 'lkjafads87hpjlasdf87523hiuiHiojsdflkjafads87hpjlasdf87523hiuiHiojsdf',
        user: {
            name: 'Franco',
            role: 'developer'
        },
    };
    return {
        type: Types.LOGIN,
        payload: returnApi,
    }
}

export function logout() {
    return {
        type: Types.LOGOUT,
    }
}