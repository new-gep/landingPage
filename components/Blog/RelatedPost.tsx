import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";


const RelatedPost = () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Últimas Postagens
        </h4>

        <div>
          {BlogData.sort((a, b) => b._id - a._id).slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="w-45 relative h-18 bg-black">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt="Blog"  className="rounded-md w-full h-full object-cover" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <a href={`/blog/blog-details?id=${post._id}`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </a>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
