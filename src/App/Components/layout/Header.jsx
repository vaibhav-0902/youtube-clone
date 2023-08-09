import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import ytLogo from "../../../Assets/yt-logo.png";
import ytLogoMobile from "../../../Assets/yt-logo-mobile.png";
import { setLoading, setMobileMenu, setSearchResults } from '../../Redux/appSlice';
import Loader from "../../Components/common/Loader"

const Header = () => {

	const [searchQuery, setSearchQuery] = useState('');

	const loading = useSelector((state) => state.app.loading);
	const searchResults = useSelector((state) => state.app.searchResults);

	const mobileMenu = useSelector((state) => state.app.mobileMenu);

	const dispatch = useDispatch();
	const navigate = useNavigate();


	const searchQueryHandler = (event) => {
		if (searchQuery?.length > 0 && (event?.key === 'Enter' || event === 'searchButton')) {
			navigate(`/searchResult/${searchQuery}`)
		}
	}

	const toggleMobileMenu = () => {
		dispatch(setMobileMenu(!mobileMenu));
	}

	useEffect(() => {
		// lol
	}, [mobileMenu])

	const { pathname } = useLocation();
	const pageName = pathname?.split('/')?.filter(Boolean)?.[1];
	return (
		<div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
			{loading && <Loader />}

			{/* Logo */}
			<div className="flex h-5 items-center">
				{pageName !== "video" && (
					<div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
						onClick={toggleMobileMenu}
					>
						{mobileMenu ?
							<CgClose className="text-white text-xl" />
							:
							<SlMenu className="text-white text-xl" />
						}
					</div>
				)}
				<Link to="/" className="flex h-5 items-center">
					<img
						className="h-full hidden dark:md:block"
						src={ytLogo}
						alt="Youtube"
					/>
					<img
						className="h-full md:hidden"
						src={ytLogoMobile}
						alt="Youtube"
					/>
				</Link>
			</div>

			{/* Search Bar */}
			<div className="group flex items-center">
				<div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
					<div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
						<IoIosSearch className="text-white text-xl " />
					</div>
					<input
						type="text"
						className="bg-transparent text-white outline-none pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyUp={searchQueryHandler}
						value={searchQuery}
						placeholder="Search"
					/>
					{searchQuery !== "" &&
						<span
							className="w-[40px] h-8 md:h-10 flex items-center justify-center rounded-full hover:bg-[#303030]/[0.6]"
							onClick={() => setSearchQuery('')}
						>
							<CgClose className="text-white text-xl" />
						</span>
					}
				</div>
				<button
					className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
					onClick={() => searchQueryHandler("searchButton")}
				>
					<IoIosSearch className="text-white text-xl" />
				</button>
			</div>

			{/* Search button */}
			<div className="flex items-center justify-between">
				<div className="hidden md:flex">
					<div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<RiVideoAddLine className="text-white text-xl cursor-pointer" />
					</div>
					<div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<FiBell className="text-white text-xl cursor-pointer" />
					</div>
				</div>
				<div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
					<img src="https://xsgames.co/randomusers/assets/avatars/female/9.jpg" alt="img" />
				</div>
			</div>
		</div>
	)
}

export default Header;