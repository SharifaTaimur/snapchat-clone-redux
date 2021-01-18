import React, { useState, useEffect } from "react";
import "./Chats.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// import { SettingsInputCompositeSharp } from "@material-ui/icons";

const Chats = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    //  @1.59
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon />
          <input placeholder="Friends" type="text" />
          <ChatBubbleIcon className="chats_chatIcon" />
        </div>
      </div>
      <div className="chat_posts"></div>
    </div>
  );
};

export default Chats;
