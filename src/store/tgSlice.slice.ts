/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = { isTg: false }

export const tgSlice = createSlice({
    name: 'tg',
    initialState,
    reducers: {
        setIsTg: (state, action) => {
            state.isTg = action.payload
        }
    }
})

export const { setIsTg } = tgSlice.actions

export default tgSlice.reducer
