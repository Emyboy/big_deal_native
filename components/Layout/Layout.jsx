import React from 'react'
import Header from '../Header/Header'

export default function Layout({
    children,
    nav
}) {
    return (
        <React.Fragment>
            <Header nav={nav}/>
            {children}
        </React.Fragment>
    )
}
