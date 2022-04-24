import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {users?.map(u => <User user={u}
                                   followingInProgress={props.followingInProgress}
                                   follow={props.follow}
                                   unFollow={props.unFollow}
                                   key={u.id}/>)}
        </div>

    </div>
}

export default Users