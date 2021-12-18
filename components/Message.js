import TimeAgo from "timeago-react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  //   console.log(user.get("ethAddress") === message.get("ethAddress"));
  // console.log(message.get("ethAddress"));
  console.log(message);
  console.log(user.get("ethAddress"));

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("userame")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-500"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first  pr-1"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-yellow-300" : "text-pink-300"
        }`}
      >
        {message.get("userName")}
      </p>
    </div>
  );
}

export default Message;
