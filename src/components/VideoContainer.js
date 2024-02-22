import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../utils/utility";
import { ALL_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
function VideoContainer() {
  const [allVideos, setAllVideos] = useState(null);
  useEffect(() => {
    getDataFromApi(ALL_VIDEOS_URL).then((res) => {
      setAllVideos(res);
    });
  }, []);
  if (!allVideos) {
    return "loading..............";
  }
  return (
    <div className="flex flex-wrap">
      {allVideos.items.map((item) => (
        <VideoCard videoItem={item} />
      ))}
    </div>
  );
}

export default VideoContainer;
