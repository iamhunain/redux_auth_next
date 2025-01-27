'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </Provider>
    )
}

export default Providers