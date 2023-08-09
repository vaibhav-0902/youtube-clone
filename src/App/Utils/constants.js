import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { title: "New", icon: <AiFillHome />, type: "home" },
    { title: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { title: "Music", icon: <CgMusicNote />, type: "category" },
    { title: "Films", icon: <FiFilm />, type: "category" },
    { title: "Live", icon: <MdLiveTv />, type: "category" },
    { title: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { title: "News", icon: <ImNewspaper />, type: "category" },
    { title: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { title: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        title: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { title: "Settings", icon: <FiSettings />, type: "menu" },
    { title: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { title: "Help", icon: <FiHelpCircle />, type: "menu" },
    { title: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];