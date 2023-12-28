"use client";
import React from "react";

const CreatePost = () => {
  const createPost = async () => {
    const response = await fetch("http://localhost:3000/api/create", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#2b5657]">
      <button onClick={createPost}>Add Post</button>
    </div>
  );
};

export default CreatePost;
