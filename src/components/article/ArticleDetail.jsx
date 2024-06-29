"use client"
import { useGetArticleQuery } from "@/store/features/article/articleSlice";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ArticleDetail = () => {
    const {id} = useParams()
    const {data, isError, isLoading}=useGetArticleQuery(id)
    console.log(data?.data, "article data is fetched")
    
  return (
    <div className="">
      <h1 className="text-start font-semibold text-2xl md:text-4xl py-5 pt-12">
       {data?.data?.title}
      </h1>
      <small className="text-primary  text-start">
        Posted on {(moment(data?.data?.createAt).format("MMM Do YY"))}
      </small>
      <img
        
        alt="thumnail image of password article"
        className="w-full rounded-lg py-5"
        src={data?.data?.image}
      />
      {/* html content */}
      <div dangerouslySetInnerHTML={{ __html: data?.data?.content }} />
    </div>
  );
};

export default ArticleDetail;
