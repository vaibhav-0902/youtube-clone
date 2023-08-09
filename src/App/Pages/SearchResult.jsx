import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDataFromAPI } from '../Utils/api';
import { setLoading, setSearchResults } from '../Redux/appSlice';
import LayoutWrapper from '../Components';
import SideNav from "../Components/layout/SideNav"
import SearchResultVideoCard from "../Components/common/SearchResultVideoCard"

const SearchResult = () => {

  const [result, setResult] = useState();
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const loading = useSelector((state) => state.loading);
  const searchResult = useSelector((state) => state.searchResult);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchSearchResults();
  }, [searchQuery])

  const fetchSearchResults = () => {
    dispatch(setLoading(true));
    fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      dispatch(setSearchResults(res?.contents)); // If needed to store the results in Redux state
      dispatch(setLoading(false));
    });
  };


  return (
      <LayoutWrapper>
        <div className="flex flex-row h-[calc(100%-56px)]">
          <SideNav />
          <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
            <div className="grid grid-cols-1 gap-2 p-5">
              {result?.map((item) => {
                if (item?.type !== "video") return false;
                let video = item.video;
                return (
                  <SearchResultVideoCard
                    key={video.videoId}
                    video={video}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </LayoutWrapper>
  )
}

export default SearchResult