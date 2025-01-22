import Image from "next/image"
import SharePost from "./SharePost"
import BlogDetailsData from "./blogDetailsData"
import { useEffect, useState } from "react"
export default function CardFull ({id}) {
    const [blog, setBlog] = useState<any>(null)

    useEffect(()=>{
        const result = BlogDetailsData.find(obj => obj._id.toString() == id);
        console.log(result)
        setBlog(result)
    },[])

    return(
        <div className="lg:w-full">
          {/* <p>id: {id}</p> */}
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">

                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                    {blog && blog.title}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Autora: </span>{" "}
                    {blog && blog.details.author}
                  </li>
                  <li>
                    <span >
                      <span className="text-black dark:text-white">Publicado em: </span>{" "}
                      {blog && blog.details.date}
                    </span>{" "}
                  </li>
                  <li>
                    <span>
                      <span className="text-black dark:text-white">Categoria: </span>{" "}
                      {blog && blog.details.category}
                    </span>
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    {blog && blog.mainText?.textOne}
                  </p>

                  <p>
                    {blog && blog.mainText?.textTwo}
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    {blog && blog.subtitle}
                  </h3>

                  <p>
                    {blog && blog.secondText?.textOne}
                  </p>

                  <p>
                    {blog && blog.secondText?.textTwo}
                  </p>

                  <p>
                    {blog && blog.secondText?.textThree}
                  </p>
                  <div className="d-flex flex-column gap-3">
                    
                    <div>
                      <h3>{blog && blog.mainText?.List?.titleOne}</h3>
                      {blog && blog.mainText?.List?.textOne}
                    </div>

                    <div className="mt-8">
                      <h3>{blog && blog.mainText?.List?.titleTwo}</h3>
                      {blog && blog.mainText?.List?.textTwo}
                    </div>

                    <div className="mt-8">
                      <h3>{blog && blog.mainText?.List?.titleThree}</h3>
                      {blog && blog.mainText?.List?.textThree}
                    </div>

                    <div className="mt-8">
                      <h3>{blog && blog.mainText?.List?.titleFour}</h3>
                      {blog && blog.mainText?.List?.textFour}
                    </div>

                    <div className="mt-8">
                      <h3>{blog && blog.mainText?.List?.titleFive}</h3>
                      {blog && blog.mainText?.List?.textFive}
                    </div>
                  </div>

                </div>

                {/* <SharePost /> */}
            </div>
        </div>
    )
}