"use client";

import { RootState } from "@/app/reduxStore/Store";
import Image from "next/image";
import { useState } from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { SendHorizontal } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useAppDispatch, useAppSelector } from "@/app/reduxStore/hooks";
import { addComment, deleteComment } from "@/app/reduxStore/CommentSlice";
import { useRouter } from "next/router";

const Bloggers = () => {
  const { user } = useUser();
  const router = useRouter();
  const { blog } = router.query; // Dynamic ID from the URL

  // Ensure that the blog parameter is available before proceeding
  const DynamicId = typeof blog === "string" ? blog : null;

  const blogs = useAppSelector((state: RootState) => state.blog.blog);
  const SingleBlog = blogs.find((item) => item.id === DynamicId);

  const [commentVal, setCommentVal] = useState<string>("");

  const dispatch = useAppDispatch();
  const comments = useAppSelector((state: RootState) => state.comments.comments);

  // Adding comment
  const handleAddComment = () => {
    if (!commentVal.trim()) return; // Prevent adding empty comments

    const newComment = {
      id: Date.now(),
      text: commentVal,
      blogId: DynamicId!,
    };

    dispatch(addComment(newComment));
    setCommentVal(""); // Clear comment input
  };

  // Deleting comment
  const handleDeleteComment = (commentId: number) => {
    dispatch(deleteComment(commentId));
  };

  // Ensure SingleBlog is available before rendering
  if (!SingleBlog) {
    return <div>Blog not found or loading...</div>;
  }

  return (
    <div className="md:max-w-[50%] w-auto mx-auto text-justify flex flex-col justify-center items-center gap-4 px-4 md:p-0">
      <h2 className="text-3xl font-bold text-center">{SingleBlog.title}</h2>
      <Image
        src={SingleBlog.image || "/default-image.jpg"} // Fallback image
        alt="Blog Image"
        height={600}
        width={700}
      />
      <p>{SingleBlog.description}</p>
      <div className="self-start">
        <p className="text-2xl font-bold">
          <span className="text-lg font-normal text-gray-600 italic mr-3 dark:text-zinc-400">
            Written By
          </span>
          {SingleBlog.author}
        </p>
        <span className="text-lg font-semibold italic text-gray-700 dark:text-zinc-400">
          Published On: {SingleBlog.date}
        </span>
      </div>

      {/* Comment Section */}
      <div className="max-w-[100%] mx-auto p-4 border border-gray-300 rounded-md shadow-md min-w-[100%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Comments</h2>
          <div className="flex items-center space-x-2">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-blue-500" />
            <span className="text-gray-600 dark:text-white font-bold">
              {comments.filter((item) => item.blogId === DynamicId).length}
            </span>
          </div>
        </div>

        {/* Add Comment */}
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCommentVal(e.target.value)}
            value={commentVal}
          />
          <button
            onClick={handleAddComment}
            disabled={!commentVal.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            <SendHorizontal />
          </button>
        </div>

        {/* Display Comments */}
        <ul className="space-y-2 mt-2">
          {comments
            .filter((item) => item.blogId === DynamicId)
            .map((item) => (
              <div key={item.id}>
                <li className="p-2 border border-gray-200 rounded-md bg-gray-50 dark:text-black text-md w-[100%] break-words">
                  <span className="text-sm flex justify-start gap-2 mb-4 items-center">
                    <Image
                      src={user?.imageUrl || "/user.png"}
                      alt="User Profile"
                      className="w-5 h-5 rounded-full"
                    />
                    {user?.fullName || "User"}
                  </span>
                  {item.text.trim()}
                </li>
                <button
                  onClick={() => handleDeleteComment(item.id)}
                  className="bg-blue-500 text-white text-sm px-2 mt-2 py-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Bloggers;
