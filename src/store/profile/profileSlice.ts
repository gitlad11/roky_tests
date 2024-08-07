'use client';
import { createSlice } from '@reduxjs/toolkit'

const profileReducer = createSlice({
    name: 'profiles',
    initialState: {
        users: [],
        //Нужно создать модель DTO 
        user: { 
            'picture' : { 'large' : '', },
            'name' : { 'last' : '', 'first' : '', },
            'gender' : '',
            'email' : '',
            'adress' : '',
        }
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const { setUsers, setUser } = profileReducer.actions;

export default profileReducer.reducer