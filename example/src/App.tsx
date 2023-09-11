import { FC } from 'react'

import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'

import { ROUTES } from './utils/router'

interface AppProps {}
export const App: FC<AppProps> = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
    )
}
