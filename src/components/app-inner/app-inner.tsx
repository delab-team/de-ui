import { FC, useEffect } from 'react'
import { Provider } from 'react-redux'

import { store, useAppDispatch } from '../../store'

import { setIsTg } from '../../store/tgSlice.slice'

export interface AppInnerProps {
    isTg: boolean;
    children: React.ReactNode;
}

const AppInnerContent: FC<AppInnerProps> = ({ isTg, children }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setIsTg(isTg))
    }, [ isTg ])

    return <>{children}</>
}

export const AppInner: FC<AppInnerProps> = ({ isTg, children }) => (
    <Provider store={store}>
        <AppInnerContent isTg={isTg}>{children}</AppInnerContent>
    </Provider>
)
