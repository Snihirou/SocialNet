const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"



interface LocationType  {
    city: string;
    country: string;
}

type UsersType = {
    id: number;
    photoURL: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: LocationType
}

type StateType = {
    users: Array<UsersType>
}

let initialState: StateType = {
    users: [
        // {id: 1, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBqMUIbzbOa3_nkFxBX2ytByuut3kqDoL5w&usqp=CAU',
        //     followed: false, fullName: 'Alex', status: 'no money, no honey', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31cyfKMWimvZPeH_pROr4Q67pHdn-UlcrqA&usqp=CAU',
        //     followed: true, fullName: 'Dasha', status: 'I am happy', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpT4qLLr8AE9I1xWEsOlQuwe1ObnrfZWKBNQ&usqp=CAU',
        //     followed: false, fullName: 'Katy', status: 'no money, no honey', location: {city: 'Kiev', country: 'Ukraine'}}

            ]
}

export const usersReducer = (state = initialState, action) => {
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
            return {...state, users: [ ...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setusersAC = (users) => ({type: SET_USERS, users})


