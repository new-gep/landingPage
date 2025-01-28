'use client'

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CardFull from "@/components/Blog/BlogCardFull";
import RelatedPost from "@/components/Blog/RelatedPost";
import BlogDetailsData from "@/components/Blog/blogDetailsData";

const SingleBlogPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredBlogs = BlogDetailsData.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            
            <div className="md:w-1/2 lg:w-[32%]">
              {/* Seção de Busca com Dropdown */}
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <div className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={searchTerm}
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    />
                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>

                    {/* Dropdown de Resultados */}
                    {(isFocused || searchTerm) && (
                      <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border border-stroke bg-white shadow-xl dark:border-strokedark dark:bg-blacksection">
                        <ul className="py-2">
                          {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog) => (
                              <li
                                key={blog._id}
                                className="cursor-pointer px-4 py-3 hover:bg-gray-100 dark:hover:bg-meta-4"
                                onMouseDown={(e) => e.preventDefault()}
                              >
                                <a
                                  href={`/blog/blog-details?id=${blog._id}`}
                                  className="block"
                                >
                                  <div className="font-medium text-black dark:text-white">
                                    {blog.title.slice(0, 50)}
                                  </div>
                                  {blog.metadata && (
                                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                      {blog.metadata.slice(0, 70)}...
                                    </div>
                                  )}
                                </a>
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-3 text-gray-500 dark:text-gray-400">
                              Nenhum resultado encontrado para "{searchTerm}"
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Seção de Categorias */}
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categorias
                </h4>
                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0">
                    <a
                      href="/blog"
                      className="block hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            {/* Conteúdo Principal */}
            <CardFull id={id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;