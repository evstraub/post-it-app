import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center justify-left flex-col shadow-xl my-[35px] py-4 px-3 w-80 h-80 `,
  name: ` text-white-600 text-xs py-2` ,
  sent: `bg-[#395dff] text-white    `,
  received: `bg-[#e5e5ea] text-black `,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
