import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

export interface AuthType {
    id: null
    email: null
    login: null
}

export type StateType = {
    data: AuthType
    isAuth: boolean
}

let initialState: StateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}
type InitialState = typeof initialState
export const authReducer = (state = initialState, action: SetAuthUserDataACType): InitialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

type DataType = {
    id: number
    email: string
    login: string
}
type SetAuthUserDataACType = {
    type: typeof SET_USER_DATA
    data: Array<DataType>
}
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data:{id, email, login}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}
