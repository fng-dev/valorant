import { Actions } from '../../interfaces/redux.interface';
import { types } from '../types';

export const authReducer = (state = {}, action: Actions) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.email,
                name: action.payload.password,
            };
        case types.logout:
            return {};

        default:
            return state;
    }
};
