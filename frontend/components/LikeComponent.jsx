import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

export default function LikeComponent() {
  const [likeCount, setLikeCount] = useState(Math.trunc(Math.random() * 100));
  const [dislikeCount, setDislikeCount] = useState(
    Math.trunc(Math.random() * 10)
  );

  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDislikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <div className="flex items-center gap-7">
      <button
        className={`but ${
          activeBtn === "like" ? "like-active" : ""
        } select-none`}
        onClick={handleLikeClick}
      >
        <span className="material-symbols-rounded">
          <SlLike />{" "}
        </span>
        Like {likeCount}
      </button>

      <button
        className={`but ${
          activeBtn === "dislike" ? "dislike-active" : ""
        } select-none`}
        onClick={handleDislikeClick}
      >
        <span className="material-symbols-rounded">
          <SlDislike />{" "}
        </span>
        Dislike {dislikeCount}
      </button>
    </div>
  );
}
