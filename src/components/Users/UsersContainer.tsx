import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    followSuccess,
    unFollowSuccess,
    toggleFollowingProgress,
    UsersType,
    requestUsers
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from "../../redux/users-selectors";

export interface Props {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<Object>
    setUsers: (users) => void
    followSuccess: (userId) => void
    unFollowSuccess: (userId) => void
    setCurrentPage: (pageNumber) => void
    setUsersTotalCount: (totalCount) => void
    toggleIsFetching: (isFetching) => void
    toggleFollowingProgress: (isFetching, userId) => void
    requestUsers:(currentPage, pageSize) => any
}

class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        //console.log(getUsers(state))
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


let mapStateToProps = (state) => {
    return {
        users: getUsers(state.usersPage),
        pageSize: getPageSize(state.usersPage),
        totalUsersCount: getTotalUsersCount(state.usersPage),
        currentPage: getCurrentPage(state.usersPage),
        isFetching: getIsFetching(state.usersPage),
        followingInProgress: getFollowingInProgress(state.usersPage)
    }
};

export default compose(
    connect(mapStateToProps, {
    followSuccess, unFollowSuccess, toggleFollowingProgress, requestUsers
}))(UsersContainer)