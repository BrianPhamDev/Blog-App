import React from "react";
import PostSideStoriesItem from "../PostSideStoriesItem/PostSideStoriesItem";
import "./postSideStories.scss";

const postItemContent = [
  {
    title: "Snoop Dogg Releases Ice Cream Brand Based On His Bored Ape",
  },
  {
    title:
      "Peak State Coffee Introduces Refillable, Aluminum Packaging and Moves Away From Compostables",
  },
  { title: "French's and Skittles Squeeze Some Mustard Onto The Rainbow" },
  { title: "Canned Refills Are Here and I Want Them To Go Viral" },
  { title: "YUNGBLD Brings Educated Mess’ Bold, Messy Vision To Life" },
];

const PostSideStories = () => {
  return (
    <div className="post-side-stories flex flex-col p-4 bg-[var(--gray-300)] rounded-md">
      <h2 className="text-[20px] font-semibold text-gradient mb-6">Trending</h2>
      {postItemContent.map((item) => (
        <PostSideStoriesItem key={item.title}>{item.title}</PostSideStoriesItem>
      ))}
    </div>
  );
};

export default PostSideStories;
