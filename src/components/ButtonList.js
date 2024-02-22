import React from "react";
import data from "../dummyResponse/buttonList.json";

function ButtonList() {
  return (
    <div>
      {data.lists.map((item) => (
        <button className="  bg-gray-200 m-3 py-2 px-3 rounded-md text-xl">
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
