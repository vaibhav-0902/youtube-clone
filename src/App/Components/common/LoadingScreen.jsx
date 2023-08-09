import React from 'react'
import { InfinitySpin } from "react-loader-spinner"

const LoadingScreen = () => {
    return (
        <div className="loading-container flex justify-center bg-black min-h-screen min-w-full">
            <div className="flex justify-center items-center">
                <InfinitySpin
                    width='200'
                    color="red"
                />
            </div>
        </div>
    )
}

export default LoadingScreen