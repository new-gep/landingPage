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
                    <HiOutlineFlag size={28} className="text-primary"/>
                    <h1 className="font-semibold">Missão</h1>
                </div>
                <p className="text-justify">Criar e implementar soluções digitais, que otimize custos, organize processos, potencialize talentos, fortaleça a cultura organizacional e impulsione a transformação da Gestão Estratégica de Pessoas</p>
            </div>
            <div className="w-1/4">
                <div>
                  <HiOutlineScale size={28} className="text-primary"/>
                  <h1 className="font-semibold">Valores</h1>
                </div>
                <p className="text-justify">Acreditamos na harmonia entre tecnologia, pessoas e processos, criando um ambiente onde todos os elementos se integram e impulsionam um desevolvimento sustentável. Inovação Valorizamos a busca constante por novas soluções, promovendo práticas que transformam positivamente a Gestão Estratégica de Pessoas. Sustentabilidade Acreditamos que práticas sustentáveis ​​são essenciais para garantir um futuro próspero e responsável para as empresas e a sociedade</p>
            </div>
            <div className="w-1/4">
                <div>
                  <HiOutlineEye size={28} className="text-primary"/>
                  <h1 className="font-semibold">Visão</h1>
                </div>
                <p className="text-justify">Ser referência na criação de soluções digitais para a Gestão Estratégica de Pessoas, inspirando ambientes,  inovadores, conectados e sustentáveis, apoiados por uma visão holística integrada</p>
            </div>
          
        </div>
        {/* <div className="w-full ml-16">
            <Integration />
        </div> */}
    </div>
  );
};

export default AboutPage;
