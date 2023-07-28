import React from "react";
import PostSideStoriesItem from "../PostSideStoriesItem/PostSideStoriesItem";

const postItemContent = [
  {
    title: "Snoop Dogg Releases Ice Cream Brand Based On His Bored Ape",
    title:
      "Peak State Coffee Introduces Refillable, Aluminum Packaging and Moves Away From Compostables",
    title: "French's and Skittles Squeeze Some Mustard Onto The Rainbow",
    title: "Canned Refills Are Here and I Want Them To Go Viral",
    title: "YUNGBLD Brings Educated Mess’ Bold, Messy Vision To Life",
  },
];
const PostSideStories = () => {
  return (
    <div className="flex flex-col p-4 bg-[var(--gray-300)]">
      <PostSideStoriesItem>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quam
        suscipit mollitia autem quos commodi provident saepe dolorem vel, eum id
        consectetur quas reiciendis? Quis sapiente delectus ipsum nostrum amet?
      </PostSideStoriesItem>
    </div>
  );
};

export default PostSideStories;
