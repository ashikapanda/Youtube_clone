import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import comments from "../dummyResponse/comments.json";
import LiveChat from "./LiveChat";
import { addMessage } from "../store/slices/chatSlice";
import { generateName } from "../utils/utility";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div className="shadow-lg  flex p-2 mb-5  text-lg ">
          <img src={comment.img} alt="img" className="w-8 h-8 pr-2" />
          <div className="font-sans">
            <p className="font-bold">{comment.name}</p>
            <p>{comment.text}</p>
            {comment.replies && <CommentList comments={comment.replies} />}
          </div>
        </div>
      ))}
    </div>
  );
};

function WatchVideo() {
  const [searchParams, setSearchPar] = useSearchParams();
  const [message, setMessage] = useState("");
  const id = searchParams.get("v");
  // const fetchApi = async () => {
  //   const data = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/comments?id=${id}&key=${API_KEY}`
  //   );
  //   const json = await data.json();
  //   console.log("data", data);
  // };

  //  console.log("pat", id);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: generateName(), message: message }));
    setMessage("");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="m-20">
      <div className=" flex">
        <iframe
          className="rounded w-4/5"
          width="1200"
          height="700"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFulScreen
        ></iframe>
        <div className=" border border-gray-400 bg  ml-5 bg-gray-100 p-2 rounded-lg">
          <p className="m-2 text-lg">Top Chat</p>
          <LiveChat />
          <div className=" m-2 ">
            <input
              type="text"
              className=" p-2 rounded-md w-10/12"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <button
              type="submit"
              className="bg bg-blue-400 p-2 ml-2 rounded-md "
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 m-2 w-4/5">
        <p className="font-bold text-3xl pb-3">
          {comments.length + " Comments"}
        </p>
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default WatchVideo;
