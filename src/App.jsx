import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PostBlog from "./components/PostBlog";
import LatestPost from "./components/LatestPost";


export default function App() {
  return (
    <div className="w-full max-w-full">
      <Header />
      <HeroSection />
      <PostBlog />
      <LatestPost />
    </div>
  );
}
