// import React from 'react'
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import { useState } from "react";

function PostCard({ post }) {
  const [isLike, setIsLike] = useState(false);
  const OnLike = () => {
    setIsLike(!isLike);
  };
  const [isSave, setIsSave] = useState(false);
  const OnSave = () => {
    setIsSave(!isSave);
  };
  return (
    <div>
      <div className="flex flex-row mt-3 mb-1 ml-2">
        <AccountCircleSharpIcon fontSize="large" />
        <div className="flex flex-col ml-2">
          <button className="text-sm font-bold">{post.username}</button>
          <button className="text-xs text-left">{post.place}</button>
        </div>
      </div>
      <div className="picture">
        <img
          src={post.link}
          alt="post"
          className="w-[330px] h-96 rounded-xl m-3 shadow-2xl"
        />
      </div>
      <div className="relative flex flex-row">
        <div className="post-below ">
          <button onClick={OnLike} className="m-1">
            {isLike ? (
              <FavoriteSharpIcon className="text-red-600" fontSize="large" />
            ) : (
              <FavoriteBorderSharpIcon
                fontSize="large"
                className="text-black/80"
              />
            )}
          </button>
          <button className="m-1 text-black/80">
            <InsertCommentOutlinedIcon fontSize="large" />
          </button>
          <button className="m-1 text-black/80">
            <SendOutlinedIcon fontSize="large" />
          </button>
        </div>
        <div className="absolute right-0 save">
          <button onClick={OnSave} className="right-0 m-1 text-black/80">
            {isSave ? (
              <TurnedInOutlinedIcon fontSize="large" />
            ) : (
              <TurnedInNotOutlinedIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>
      <div className="ml-2 bottom">
        <p>
          Liked by <span className="font-bold">{post.username}</span> and{" "}
          {!isLike ? (
            <span className="font-bold">{post.likes}</span>
          ) : (
            <span className="font-bold">{post.likes + 1}</span>
          )}{" "}
          others
        </p>
        <p>{post.caption}</p>
        <p>View all {post.comments} comments..</p>
      </div>
      
    </div>
  );
}

export default PostCard;
