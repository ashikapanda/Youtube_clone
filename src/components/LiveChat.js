import React, { useEffect } from "react";
import CHatMessage from "./CHatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/slices/chatSlice";
import { generateName, generateMessage } from "../utils/utility";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      //API polling

      dispatch(
        addMessage({ name: generateName(), message: generateMessage(30) })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-y-scroll h-[640px] flex flex-col-reverse ">
      {messages &&
        messages.map((mes) => (
          <CHatMessage name={mes.name} message={mes.message} />
        ))}
    </div>
  );
};

export default LiveChat;
