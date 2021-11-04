const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"



interface LocationType  {
    city: string;
    country: string;
}

export type UsersType = {
    id: number;
    photoURL: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: LocationType
    photos: any
    name: string
}

export type StateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: StateType = {
    users: [
        // {id: 1, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBqMUIbzbOa3_nkFxBX2ytByuut3kqDoL5w&usqp=CAU',
        //     followed: false, fullName: 'Alex', status: 'no money, no honey', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31cyfKMWimvZPeH_pROr4Q67pHdn-UlcrqA&usqp=CAU',
        //     followed: true, fullName: 'Dasha', status: 'I am happy', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpT4qLLr8AE9I1xWEsOlQuwe1ObnrfZWKBNQ&usqp=CAU',
        //     followed: false, fullName: 'Katy', status: 'no money, no honey', location: {city: 'Kiev', country: 'Ukraine'}}
    ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
}
type InitialState = typeof initialState
export const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state
    }
}

type ActionsTypes = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetUsersTotalCountACType


type FollowACType = {
    type: typeof FOLLOW
    userId: number
    }
export const followAC = (userId) => ({type: FOLLOW, userId})
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setusersAC = (users) => ({type: SET_USERS, users})
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const SetCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
type SetUsersTotalCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const SetUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

