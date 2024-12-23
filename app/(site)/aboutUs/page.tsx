import React, { useState } from "react";
import { Metadata } from "next";
import Integration from "@/components/Integration";
import { HiOutlineEye, HiOutlineFlag, HiOutlineScale } from "react-icons/hi";
export const metadata: Metadata = {
  title: "Sobre Nós - New Gep",
  description: "Página sobre nós",
  // other metadata
};



const AboutPage = () => {
  return (
    <div className="pb-20 pt-40">
        <div className="w-full flex-col text-center ">
            <p>Estamos com você</p>
            <h1 className="font-bold text-4xl text-primary">Cultura Gep</h1>
        </div>
        <div className="w-full flex justify-around px-5 gap-5 my-5">
            <div className="w-1/4">
                <div>
                    <HiOutlineFlag size={25} className="text-primary"/>
                    <h1 className="font-semibold">Missão</h1>
                </div>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat obcaecati nihil, consequatur doloremque deleniti nesciunt libero hic nam tempora quos quam quisquam impedit suscipit iste, corrupti porro? Laboriosam, cum?</p>
            </div>
            <div className="w-1/4">
                <div>
                  <HiOutlineEye size={25} className="text-primary"/>
                  <h1 className="font-semibold">Visão</h1>
                </div>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat obcaecati nihil, consequatur doloremque deleniti nesciunt libero hic nam tempora quos quam quisquam impedit suscipit iste, corrupti porro? Laboriosam, cum?</p>
            </div>
            <div className="w-1/4">
                <div>
                  <HiOutlineScale size={25} className="text-primary"/>
                  <h1 className="font-semibold">Valores</h1>
                </div>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat obcaecati nihil, consequatur doloremque deleniti nesciunt libero hic nam tempora quos quam quisquam impedit suscipit iste, corrupti porro? Laboriosam, cum?</p>
            </div>
        </div>
        {/* <div className="w-full ml-16">
            <Integration />
        </div> */}
    </div>
  );
};

export default AboutPage;
