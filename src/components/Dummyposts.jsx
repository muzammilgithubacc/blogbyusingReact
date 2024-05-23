import React from "react";
import card1img from "../assets/images/card1img.jpg";

export default function Dummyposts(props) {
  return (
    <>
      <div className="w-72 bg-gray-100 rounded-xl p-4  m-2 h-60 overflow-hidden">
        <div className="w-full justify-center">
          <img
            src={card1img}
            alt=""
            width="100%"
            className="h-40 object-cover object-top rounded-xl"
          />
        </div>

        <h2 className="text-xl font-bold">DevOps</h2>
        <div className="overflow-hidden h-7">
          <p>
            Its a high demand skill now a days Its a high demand skill now a
            days
          </p>
        </div>
      </div>
    </>
  );
}
