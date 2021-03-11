import React from 'react'
import Header from '../Header/Header'

export default function Layout({
    children,
    nav,
    back
}) {
    return (
        <React.Fragment>
            <Header nav={nav} back={back}/>
            {children}
        </React.Fragment>
    )
}
