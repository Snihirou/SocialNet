import {addPostAC, deletePost, profileReducer} from "./profile-reducer";
import React from "react";

let state ={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 20}
    ]
}

test('length of post should be incremented', () => {
    // 1 test data
    let action = addPostAC("Pitch Black")
    //2. action
    // @ts-ignore
    let newState = profileReducer(state, action);
    // 3. exprctation
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
    // 1 test data
    let action = addPostAC("Pitch Black")
    //2. action
    // @ts-ignore
    let newState = profileReducer(state, action);
    // 3. exprctation
    expect(newState.posts[2].message).toBe("Pitch Black")
});

test('after deleting length of messages should be decrement', () => {
    // 1 test data
    let action = deletePost(1)
    //2. action
    // @ts-ignore
    let newState = profileReducer(state, action);
    // 3. exprctation
    expect(newState.posts.length).toBe(2)
});

test('after deleting length shouldnt be decrement if id is incorrect', () => {
    // 1 test data
    let action = deletePost(1000)
    //2. action
    // @ts-ignore
    let newState = profileReducer(state, action);
    // 3. exprctation
    expect(newState.posts.length).toBe(2)
});



