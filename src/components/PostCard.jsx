import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 h-60">
        <div className="w-full justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="h-40 object-cover object-top rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="overflow-hidden h-7">
          <p>it is {content}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
