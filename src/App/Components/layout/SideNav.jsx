import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideNavMenuItem from "../common/SideNavMenuItem";
import { categories } from "../../Utils/constants";
import { setLoading, setSelectedCategory, setMobileMenu } from '../../Redux/appSlice';

const SideNav = () => {

  const selectedCategory = useSelector((state) => state.app.selectedCategory);

  const mobileMenu = useSelector((state) => state.app.mobileMenu);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = (title, type) => {
    if (type === "category" || type === "home") {
      dispatch(setSelectedCategory(title));
      navigate('/')
    }
  }

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative transition-all duration-300 z-10  md:translate-x-0  
      ${mobileMenu ? "translate-x-0" : "translate-x-[-240px]"}`}
    >
      <div className="flex px-5 flex-col h-auto">
        {categories.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SideNavMenuItem
                text={item.type === "home" ? "Home" : item.title}
                icon={item.icon}
                action={() => clickHandler(item.title, item.type)}
                className={`${selectedCategory === item.title ? "bg-white/[0.15]" : ""
                  }`}
              />
              {item.divider && (
                <hr className="my-5 border-white/[0.2]" />
              )}
            </React.Fragment>
          )
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] flex justify-center text-[12px]">
          Clone by: Vaibhav Waghela {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default SideNav