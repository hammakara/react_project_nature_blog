import React from "react";
import PostCard from "./PostCard";

export default function LatestPost() {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-3 px-16 lg:px-6">
        <h3 className="font-bold text-xl">Latest Post</h3>
        <a href="" className="underline text-green-500">
          More
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-16 sm:px-10 lg:px-6 md:8 gap-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
