import React, { useEffect, useState } from "react";
import navHam from "../assets/navHam.png";
import appLogo from "../assets/appLogo.png";
import userIcon from "../assets/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../store/slices/appSlice";
import { Link, json } from "react-router-dom";
import { cacheSearchResults } from "../store/slices/searchSlice";
function Head() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const searchCache = useSelector((store) => store.search);
  //{"iph":[1,2,3],
  //"as": [3,4,5,4]}

  useEffect(() => {
    //if cache has the searchQuery results, take it from cache otherwise make api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //set results from cache
        setSearchRes(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSideMenuToggle = () => {
    dispatch(toggleSideMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const jsonData = await data.json();
    setSearchRes(jsonData[1]);
    dispatch(cacheSearchResults({ [searchQuery]: jsonData[1] }));
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-5">
      <div className="left-header col-span-2 flex ">
        <img
          alt="nav"
          src={navHam}
          className="w-13 h-10 pr-5 cursor-pointer"
          onClick={() => {
            handleSideMenuToggle();
          }}
        />

        <img alt="applogo" src={appLogo} className=" w-15 h-9" />
      </div>
      <div className="search col-span-9 ">
        <div>
          <input
            type="text"
            placeholder="Search.."
            className="w-1/2  border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onBlur={() => {
              setSearchRes([]);
            }}
            onFocus={() => {
              getSearchSuggestions();
            }}
          />
          <button className="border border-gray-400 px-6 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {searchRes.length > 0 && (
          <div className="p-2 rounded-lg w-1/3 shadow-2xl text-lg fixed bg-gray-100">
            <ul>
              {searchRes.map((item) => (
                <li className="p-2">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="search col-span-1  ">
        <button className="border p-2 rounded-lg flex bg-gray-100 border-gray-400">
          <img alt="userLogo" src={userIcon} className=" w-12 h-10 pr-1" />
          <p className="text-blue-700 text-lg pt-1">Sign In</p>
        </button>
      </div>
    </div>
  );
}

export default Head;
