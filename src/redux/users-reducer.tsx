import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


interface LocationType {
    city: string;
    country: string;
}

interface ContactsType {
    facebook: string;
    vk: string;
    github: string;
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
    aboutMe: string
    contacts: ContactsType
    lookingForAJobDescription: string
}

export type StateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<Object>
    //fake: number
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
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    //fake: 10
}
type InitialState = typeof initialState
export const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
       // case "FAKE": return {...state, fake: state.fake + 1}
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
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

type ActionsTypes =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetUsersTotalCountACType
    | SetIsFetchingACType
    | SetIsFollowingProgressACType

type FollowACType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users) => ({type: SET_USERS, users})
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
type SetUsersTotalCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
type SetIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
type SetIsFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage([page]));
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }

                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
