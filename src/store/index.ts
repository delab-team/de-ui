// Ваш файл, использующий store
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import tgReducer from './tgSlice.slice'

export const store = configureStore({ reducer: { tg: tgReducer } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): any => useDispatch<typeof store.dispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
