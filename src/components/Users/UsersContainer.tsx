import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    followSuccess,
    unFollowSuccess,
    toggleFollowingProgress,
    UsersType,
    getUsers,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

export interface Props {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
    setUsers: (users) => void
    followSuccess: (userId) => void
    unFollowSuccess: (userId) => void
    setCurrentPage: (pageNumber) => void
    setUsersTotalCount: (totalCount) => void
    toggleIsFetching: (isFetching) => void
    toggleFollowingProgress: (isFetching, userId) => void
    getUsers:(currentPage, pageSize) => any
}

class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollow={this.props.unFollowSuccess}
                   follow={this.props.followSuccess}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress }
            />
        </>
    }
}


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
});

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setusersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(SetCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(SetUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(ToggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    followSuccess, unFollowSuccess, toggleFollowingProgress, getUsers
})(UsersContainer)