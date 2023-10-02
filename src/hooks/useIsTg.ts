import { useSelector } from 'react-redux'

import { RootState } from '../store/index'

export const useIsTg = (): boolean => useSelector((state: RootState) => state.tg.isTg)
