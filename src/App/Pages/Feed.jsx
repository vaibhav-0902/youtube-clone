import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setLoading, setSearchResults, setSelectedCategory } from '../Redux/appSlice';
import { fetchDataFromAPI } from '../Utils/api';
import LayoutWrapper from '../Components';
import SideNav from "../Components/layout/SideNav"
import LoadingScreen from '../Components/common/LoadingScreen';

const VideoCard = lazy(() => import("../Components/common/VideoCard"))

const Feed = () => {

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.app.selectedCategory);

  const loading = useSelector((state) => state.app.loading);

  const searchResults = useSelector((state) => state.app.searchResults);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    dispatch(setLoading(!loading));
    fetchDataFromAPI(`search/?q=${query}`)
      .then(({ contents }) => {
        dispatch(setSearchResults(contents))
        console.log("res : ", contents);
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log(err);
      })
  }

  return (
    <LayoutWrapper>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <SideNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5">
            {!loading && searchResults && searchResults.map((item) => {
              if (item.type !== 'video') return false;
              return (
                <Suspense fallback={<LoadingScreen />}>
                  <VideoCard
                    key={item?.video?.videoId}
                    video={item?.video}
                  />
                </Suspense>
              )
            })}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Feed;