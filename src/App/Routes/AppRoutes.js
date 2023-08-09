import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

import LoadingScreen from '../Components/common/LoadingScreen';

const Feed = lazy(() => import('../Pages/Feed'));
const SearchResult = lazy(() => import('../Pages/SearchResult'));
const VideoDetails = lazy(() => import('../Components/common/VideoDetails'));
const PageNotFound = lazy(() => import('../Pages/PageNotFound'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" exact element={(
                <Suspense fallback={<LoadingScreen />}>
                    <Feed />
                </Suspense>
            )} />
            <Route
                path="/searchResult/:searchQuery"
                element={(
                    <Suspense fallback={<LoadingScreen />}>
                        <SearchResult />
                    </Suspense>
                )}
            />
            <Route path="/video/:id" element={(
                <Suspense fallback={<LoadingScreen />}>
                    <VideoDetails />
                </Suspense>
            )} />
            <Route path="*" element={(
                <Suspense fallback={<LoadingScreen />}>

                    <PageNotFound />
                </Suspense>
            )} />
        </Routes>
    )
}

export default AppRoutes;