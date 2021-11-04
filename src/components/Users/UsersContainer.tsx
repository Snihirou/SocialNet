import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    SetCurrentPageAC,
    setusersAC,
    SetUsersTotalCountAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";

interface Props {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setUsers: (users) => void
    follow: (userId) => void
    unFollow: (userId) => void
    setCurrentPage: (pageNumber) => void
    setTotalUsersCount: (totalCount) => void
}

class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}/>
    }
}


let mapSateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setusersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(SetUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(UsersContainer)