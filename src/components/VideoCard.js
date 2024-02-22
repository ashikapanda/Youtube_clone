import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function VideoCard({ videoItem }) {
  const { snippet, statistics, id, contentDetails } = videoItem;
  return (
    <div className="mb-2 p-3 shadow-xl text-xl max-w-lg ">
      <Link to={`/watch?v=${id}`}>
        <div
          className={`w-[${snippet?.thumbnails?.high?.width}px]  h-[${snippet?.thumbnails?.high?.width}px]`}
        >
          <div>
            <img
              className=" rounded-3xl p-2"
              src={snippet?.thumbnails?.high?.url}
              alt="video"
            />
            <span className="bg bg-black text-white"></span>
          </div>
          <p className="break-normal">{snippet?.title}</p>
          <p className="text-gray-500 text-lg">{snippet?.channelTitle}</p>
          <p>
            {statistics?.viewCount}
            <span>
              {" ▪ " + moment(snippet?.publishedAt).format("DD MMM, YYYY")}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
