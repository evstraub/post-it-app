import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[90vw] border-2 border-black flex text-xl fixed bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
  time:`h-14`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "" || date === " ") {
        alert("Please enter a valid message and date");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: `${date}${input}`,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("") 
    setDate("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="add a note..."
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={style.time}
        type="date"
        
      />
      <button className={style.button} type="post">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
