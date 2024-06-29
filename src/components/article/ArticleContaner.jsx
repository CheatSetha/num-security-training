"use client";
import React from "react";
import AwarenessCard from "../awareness-month/AwarenessCard";
import { useGetArticlesQuery } from "@/store/features/article/articleSlice";

const ArtilceContainer = () => {
  const { data, isError, isLoading } = useGetArticlesQuery();
  return (
    <div className="py-10">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      {data &&
        data.data.map((article) => (
          <AwarenessCard
            key={article._id}
            id={article._id}
            headerTitle={article.title}
            postedAt={article.createAt}
            image={article.image}
          />
        ))}
      {/* <AwarenessCard /> */}
    </div>
  );
};

export default ArtilceContainer;
