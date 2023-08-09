import React from 'react'
import Header from './layout/Header'

const LayoutWrapper = ({ children }) => {
    return (
        <div className="LayoutWrapper flex flex-col h-full">
            <Header />
            {children}
        </div>
    )
}

export default LayoutWrapper