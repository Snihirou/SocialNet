import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export type StateType = {
    initialized: boolean
}

let initialState: StateType = {
    initialized: false
}
type InitialState = typeof initialState
export const appReducer = (state = initialState, action: InitializedSuccessACType): InitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type InitializedSuccessACType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = () =>
    ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
   let promise =  dispatch(getAuthUserData())
    promise.then( () => {
        dispatch(initializedSuccess())
    })
}

export default appReducer