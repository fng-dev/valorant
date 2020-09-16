import { types } from '../types';

export const login = (email: string, password: string) => ({
    type: types.login,
    payload: { email, password },
});
