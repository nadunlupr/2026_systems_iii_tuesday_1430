import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'
import TopLayout from './nav-bar/TopLayout.jsx'
import { UserProvider } from './user-context/UserProvider.jsx'

const user = {
    name: 'Denis'
}
createRoot(document.getElementById('root')).render(
    <>
        <UserProvider user={user} >
            <TopLayout />
            <AppRouter />
        </UserProvider>
    </>
)
